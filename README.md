# stylesheets.js

**This minimalistic JavaScript library makes it possible to make small CSS changes straight in your JavaScript-Code in a very beautifull way**

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
});```

A innovative change I did is the thing that you can select elements now by the attribute name. A table how to select elements is below.

| element | _no prefix_ | body   | `<body>`              |   |
|---------|-------------|--------|-----------------------|---|
| id      | #           | #id    | `<div id="id">`       |   |
| class   | .           | .class | `<div class="class">` |   |
| name    | _           | _name  | `<div name="name">`   |   |
