"use-strict";

function css(data) {

    let transformed = [];
    const firstLayer = Object.keys(data);
    
    for (selector in firstLayer) {
        transformed.push([
            firstLayer[selector],[]
        ]);

        const secondLayerKeys = Object.keys(data[firstLayer[selector]])
        const secondLayerValues = Object.values(data[firstLayer[selector]])
        

        for (rule in secondLayerKeys) {
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
