function exportBIN(){

let buffer=new ArrayBuffer(frames.length*32);

let view=new DataView(buffer);

let offset=0;

frames.forEach(f=>{

f.forEach(p=>{

view.setFloat32(offset,p.x); offset+=4;
view.setFloat32(offset,p.y); offset+=4;
view.setFloat32(offset,p.r); offset+=4;
view.setFloat32(offset,p.s); offset+=4;

});

});

download(buffer,"anim.bin");

}
