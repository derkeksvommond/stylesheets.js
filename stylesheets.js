"use-strict";

const capitalize_non = function(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function css(data) {
    let transformed = [];
    const firstLayer = Object.keys(data);

    const capitalize = function(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
    
    for (selector in firstLayer) {
        transformed.push([
            firstLayer[selector],[]
        ]);

        let secondLayerKeys = Object.keys(data[firstLayer[selector]])
        let secondLayerValues = Object.values(data[firstLayer[selector]])
        

        for (rule in secondLayerKeys) {
            if (secondLayerKeys[rule].includes("-")) {
                secondLayerKeys[rule] = secondLayerKeys[rule].split("-");
                secondLayerKeys[rule] = secondLayerKeys[rule][0] + capitalize(secondLayerKeys[rule][1]);
            }

            transformed[selector][1].push([
                secondLayerKeys[rule],
                secondLayerValues[rule]
            ])
        }
    }

    for (j in transformed) {

        let type;
        selector = transformed[j][0];

        if (selector.startsWith("#")) {
            type = [document.getElementById(selector.replace('#',''))];
        }
        
        else if (selector.startsWith(".")) {
            type = document.getElementsByClassName(selector.replace('.','')); 
        }

        else {
            type = document.getElementsByTagName(selector); 
        }

        type = Array.from(type)

        for (k in type) {
            el = type[k];

            for (l in transformed[j][1]) {
                var command = `el.style.${transformed[j][1][l][0]} = "${transformed[j][1][l][1]}";`;
                Function(command)();
            }
        }
    }
}
