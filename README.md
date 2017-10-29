# Paste in Order - Sketch Plugin
This plugin allows you to copy and paste layers between artboards, while keeping their position in the layer list.

![Plugin preview](https://raw.githubusercontent.com/juliussohn/sketch-paste-in-order/master/preview.gif)


## Usage
1. Select the layers to copy
2. Select `Plugins` > `Paste in order` > `Copy with order` or press  `⌘`+ `Alt`+`Ctrl`+`C`
3. Select the artboard where you want to paste the layers
4. Select `Plugins` > `Paste in order` > `Paste in order` or press  `⌘`+ `Alt`+`Ctrl`+`V`

## Notes
1. The Layer order is counted from the lowest layer, which has the index 0. The result can be different if the artboard where you paste the layers has a different number of layers.
2. The Plugin currently only works with top level layers
