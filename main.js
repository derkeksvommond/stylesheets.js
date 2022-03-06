"use-strict";

const errorDictionary = {
    666: "Interesting error... Nobody knows how we got here :( \n Please report this immediately",
    101: "Invalid Type. Type must be a number between 0 - 3.",
    102: "Type must be a integer.",
    103: "Selector must have been defined with rules."
};

const cssList = {
    "backgroundColor": "background-color",
    "color": "color",
    "justifyContent": "justify-content",
    "border": "border",
    "display": "display",
    "visibility": "visibility",
    "textAlign": "text-align",
    "borderRadius": "border-radius",
    "flexWrap": "flex-wrap",
    "width": "width",
    "maxWidth": "max-width",
    "margin": "margin",
    "marginTop": "margin-top",
    "marginRight": "margin-right",
    "marginBottom": "margin-bottom",
    "marginLeft": "margin-left",
    "background": "background",
    "alignContent": "align-content",
    "height": "height",
    "padding":"padding",
    "fontSize":"font-size",
    "textDecoration": "text-decoration",
    "transition": "transition",
    "opacity": "opacity",
    "wordWrap": "word-wrap",
    "paddingTop":"padding-top",
    "paddingRight":"padding-right",
    "paddingBottom":"padding-bottom",
    "paddingLeft":"padding-left",
    "transform": "transfrom",
};

const makeError = function(error) {
    error = `${errorDictionary[`${error}`]} [${error}]`;
    console.error(error);
    return error;
}

function getIt (type, unique_name) {

    if (Number.isInteger(type) == false) throw makeError(102);
    if ((type <= 0 && type >= 2) != false) throw makeError(101);

    let returnedFunction = "komisch";

    switch(type) {
        case 0: returnedFunction = document.getElementById(unique_name); break;
        case 1: returnedFunction = document.getElementsByClassName(unique_name); break;
        case 2: returnedFunction = document.getElementsByTagName(unique_name); break;

        default: makeError(666);
    }
    
    return returnedFunction;
}

function disassemble(data) {
    const formatted = JSON.parse(JSON.stringify(data));

    const selectorList = Object.keys(formatted);
    let typeList = [];

    for (selector in selectorList) {

        let selectorName = selectorList[selector];

        if (selectorName.startsWith("#")) {
            typeList.push([0, selectorName.replace("#",'')]);
        }

        else if (selectorName.startsWith(".")) {
            typeList.push([1, selectorName.replace(".",'')]);
        }

        else {
            typeList.push([2, selectorName]);
        }

        selector++;

    }

    for (selector in selectorList) {
        const rules = Object.values(data[selectorList[selector]])[0];

        if (Object.keys(rules)[0] == undefined) {
            return makeError(103);
        }

        let ruleList = [];
        
        for (key in Object.keys(rules)) {

            ruleList.push([Object.keys(rules)[key], Object.values(rules)[key]])
        }

        typeList[selector].push(ruleList);
    }

    const transformedData = typeList;

    return transformedData;

}

function css(data) {
    const transformedData = disassemble(data);

    for (selector in transformedData) {

        let el = getIt(transformedData[selector][0], String(transformedData[selector][1]));

        for(j in transformedData[selector][2]) {
            if (el instanceof HTMLCollection) {
                var element = [].slice.call(el);
                for (k in element) {
                    let rule = transformedData[selector][2][j][0];
                    rule = Object.values(cssList).indexOf(rule);
                    rule = `element[${k}].style.${Object.keys(cssList)[rule]} = "${transformedData[selector][2][j][1]}";`;
                    eval(rule);
                    k++;
                }
            }

            else {

                let rule = transformedData[selector][2][j][0];
                rule = Object.values(cssList).indexOf(rule);
                rule = `el.style.${Object.keys(cssList)[rule]} = "${transformedData[selector][2][j][1]}";`;
                eval(rule);

            }
        }
        selector++;
    }
    
}

window.addEventListener('load', function () {
    css({
        "body": [{
            "background-color": "green",
            "font-family": "sans-serif" 
        }], 
        
        "#id": [{
            "border": "solid 1px black"
        }],
        
        ".class": [{
            "opacity": "1",
            "font-size": "20px"
        }]
    });
})