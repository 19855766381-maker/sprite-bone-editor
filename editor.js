let app = new PIXI.Application({
width:800,
height:600,
backgroundColor:0x222222
});

document.getElementById("stage").appendChild(app.view);

let baseTexture;
let parts=[];

function loadAtlas(){

let png = document.getElementById("pngFile").files[0];
let xml = document.getElementById("xmlFile").files[0];

let reader = new FileReader();

reader.onload=function(){

parseAtlas(reader.result);

};

reader.readAsText(xml);

baseTexture = PIXI.Texture.from(URL.createObjectURL(png));

}
