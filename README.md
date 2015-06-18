# Stb - [S]emi[t]ransparent [b]lackness

A tooltip-like box that shows/hides when you hover in/out of a node.

#### USAGE

Import/include the stb.js and stb.css files.

Register a css class:
```js
Stb.register_class('icon', icon_on_hover_in, icon_on_hover_out);

function icon_on_hover_in($icon, $stb) {
    // $icon is the $node that was hovered IN with the mouse.

    // $stb get's cleared each time when a node with a registered
    // class is hovered so you only have to $stb.apppendChild(...), etc.
}

function icon_on_hover_out($icon, $stb) {
    // $icon is the $node that was hovered OUT with the mouse.
}

```

[Demo](https://tipdbmp.github.io/stb/).
