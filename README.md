# stylesheets.js

**stylesheets.js is a minimalistic JavaScript library which makes it possible to change CSS in a very beautiful way.** You overgive the function `css()` a JSON-object which looks very similar to CSS.

Example:
```js
css() {
    "#myID": {
        "background-color": "red",      // you can use the rules like in css
        "backgoundColor": "yellow"      // or like in js
    }
}
```
---

## Quickstart
1. First you have to download the "stylesheets.js"-file out of this repository.
2. Move it into your project folder and link it:
   ```html
   <script src="path/to/this/file/stylesheets.js"></script>
   ``` 

3. Call the function `css( "div": {"border": {"solid 1px red" }})`.

**Make sure the function will be only executed if the ones concerned are alread loaded.** In case you want to apply your style right after calling the page you can use `eventListeners()` like so:

```js
window.addEventListener('load', function () {
    css({
        "#myclass": {
            "backgroundColor": "#f0f0f0"
        }
    });
```
---
## Syntax
The Synatx is as simple as in CSS.

```js
css({ selector: {rule: value} });
```
All values (value) and keys (rule, selector) must be a string

---
## Restrictions
Unfortunatly there are still many restriction:
- defining of pseudo-elements
- "advanced" ways of selecting a element (e.g.: `"body .childs {}"`)
- pseudo-classes won't work too *

\* Even if it's not implemented yet you can effect the result in a very simple way:

> **JavaScript**:
```js
let el = document.getElementById("mylink");

el.addEventListener("mouseenter", 
    function() {
        css({
            "#mylink" {
                "color": "blue",
                "text-decoration": "none"
        });

        // here you could execute sth. else too
    }
;)
```

> **CascadingStyleSheets**
```css
#mylink:hover {
    color: blue;
    text-decoration: none;
}
```

Obviously it's more code but the clear proargumet is that you can execute anythiny else you want too.

---
In case you're using this "software" it'd honor you if you mention me :)
