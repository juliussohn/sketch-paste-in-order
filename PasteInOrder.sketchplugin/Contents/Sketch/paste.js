function deleteLayerIndexes( value) {
	NSUserDefaults.standardUserDefaults().removeObjectForKey('layerIndexes')
}

function setLayerIndexes( value) {
	NSUserDefaults.standardUserDefaults().setObject_forKey_( value,'layerIndexes')
}
function getLayerIndexes() {
	return NSUserDefaults.standardUserDefaults().objectForKey_('layerIndexes');
}

function onCopyWithOrder(context){

	var sketch = context.api();
	const doc = context.document;
	var selectedLayers = sketch.selectedDocument.selectedLayers;
	if(selectedLayers.length === 0){
		doc.showMessage("Select at least one layer first.")
	}else{
		var selectedLayerIndexes = []
		selectedLayers.iterate(function(layer, i){
			log(layer.id)
			selectedLayerIndexes.push(layer.index);
		})

		setLayerIndexes(selectedLayerIndexes);

		[NSApp sendAction:'copy:' to:nil from:doc];
	}

}

function onPasteInOrder(context){
	const doc = context.document;
	const sketch = context.api();

	const layerIndexes = getLayerIndexes();

	[NSApp sendAction:'paste:' to:nil from:doc];
	var selectedLayers = sketch.selectedDocument.selectedLayers;
	if(!layerIndexes || selectedLayers.length !== layerIndexes.length){
		doc.showMessage("Use the \"Copy with order\" command before pasting in order!")
		selectedLayers.iterate(function(layer){
			layer.remove()
		})

	}else{
		var i=0;
		selectedLayers.iterate(function(layer){
			log(layer.id)

			const indexDiff = layer.index - layerIndexes[i];
			if(indexDiff>0){
				for(var j = 0; j<indexDiff; j++){
					layer.moveBackward()
				}
			}else if(indexDiff<0){
				for(var j = 0; j>indexDiff; j--){
					layer.moveForward()
				}
			}
			i++;
		})
	}
	}

