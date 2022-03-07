# stylesheets.js

**This minimalistic JavaScript library makes it possible to make small CSS changes straight in your JavaScript-Code in a very beautifull way**
You overgive the changes you want to make as a JSON-Object. Pretty simple right? And of course much more beautifull than doing this: `document.getElementById("sixtynine").style.color = "#fff";`


## Quickstart
Firstly download this file. After that set the linking into the head of your html-file.
```html
<script src="path/to/this/file/stylesheets.js"></script>
```

Now you can start editing the CSS of your webpage. The Syntax is quite simple.
**Example:**
```js
css({
    "body": {
        "backgroundCcolor": "green",
        "fontFamily": "sans-serif" 
    }, 
        
    "#id": {
        "border": "solid 1px black"
     }],
        
    ".class": {
        "opacity": "1",
        "fontSize": "20px"
    }
});
```

As JavaScript is executed from top to bottom you have to make sure the document is loaded before you call the function. In Case the function is getting executed by buttonclick this fact can be neglected. Otherwise you have to do it this way:
```js
window.addEventListener('load', function () {
    css({
        "#myclass": {
            "backgroundColor": "#f0f0f0"
        }
    });
```

As shown in the table below you define selectors like in a normal CSS:
| Type    | Prefix      | Example| Codeexample           |
|---------|-------------|--------|-----------------------|
| element | _no prefix_ | body   | `<body>`              |
| id      | #           | #id    | `<div id="id">`       |
| class   | .           | .class | `<div class="class">` |

Unfortunately there are still many restrictions.

> 1. You can't access pseudoelements like `::before` or `::after`
> 2. The same way I treated pseudoactions\*
> 3. Advanced ways like getting childelements and so on doesn't work too

\* Shouldn't be a problem implementing yourselve because of eventlisteners 


## General Syntax
1. Firstly you call the function `css();`
2. With the function you overgive your JSON-Object `css({ selector: { rule: value } }`

**All selcetors, rules and values must be a string!**

In case you're using this "software" please mention my work :)
