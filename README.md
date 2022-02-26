# stylesheets.js

**This minimalistic JavaScript library makes it possible to make small CSS changes straight in your JavaScript-Code in a very beautifull way**

## QuickstartSet this in the head tag of your html-file
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

