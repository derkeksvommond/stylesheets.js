# stylesheets.js

**This minimalistic JavaScript library makes it possible to make small CSS changes straight in your JavaScript-Code in a very beautifull way**
Anyways I am still working at it. You overgive the changes you want to make as a JSON-Object. Pretty simple right? And of course much more beautifull than doing this: `document.getElementById("sixtynine").style.color = "#fff";`

## Quickstart
Set this in the head tag of your html-file
```html
<script src="https://louanne.co/stylesheets.js"></script>
```

Now you can start editing the CSS of your webpage. The Syntax is quite simple.
**Example:**
```js
css({
    "body": [{
        "background-color": "#fff",
        "font-family": "sans-serif" 
    }], 
    
    "#id": [{
        "border:" "solid 1px black"}]
});
```

A innovative change I did is the thing that you can select elements now by the attribute name. A table how to select elements is below.

| Type    | Prefix      | Example| Codeexample           |
|---------|-------------|--------|-----------------------|
| element | _no prefix_ | body   | `<body>`              |
| id      | #           | #id    | `<div id="id">`       |
| class   | .           | .class | `<div class="class">` |
| name    | _           | \_name  | `<div name="name">`   |

Unfortunately there are still many restrictions.

> 1. You can't access pseudoelements like `::before` or `::after`
> 2. The same way I treated pseudoactions\*
> 3. Advanced ways like getting childelements and so on doesn't work too

\* Shouldn't be a problem because of eventlisteners 

Now a list is following which css-rules are working:
- background\-color
- color
- font-family
- border
- padding
- margin
- border-radius
- display
- visibility

## Errorcodes and their meaning

| Code | Description                                          |
|------|------------------------------------------------------|
| 666  | Interesting error... Nobody knows how we got here :( |
| 101  | Invalid Type. Type must be a number between 0 - 3.   |
| 102  | Type must be a integer.

Of course there are much more possible erros but at the moment they won't be detected by the library.

## General Syntax
1. Firstly you call the function `css();`
2. With the function you overgive your JSON-Object `css({ selector: [{ rule: value }] }

**All selcetors, rules and values must be a string!**

