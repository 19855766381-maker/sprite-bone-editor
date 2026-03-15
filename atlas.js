let sprites = {};

function parseAtlas(xmlText){

let parser = new DOMParser();
let xml = parser.parseFromString(xmlText,"text/xml");

let list = xml.querySelectorAll("SubTexture");

list.forEach(s=>{

sprites[s.getAttribute("name")] = {

x:parseInt(s.getAttribute("x")),
y:parseInt(s.getAttribute("y")),
w:parseInt(s.getAttribute("width")),
h:parseInt(s.getAttribute("height"))

};

});

}
