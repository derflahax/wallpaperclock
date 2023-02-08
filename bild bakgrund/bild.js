const Jimp = require('jimp') ;



async function textOverlay(t) {
   // Reading image
   const image = await Jimp.read('black.png');
   // Defining the text font
   const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
   image.print(font, 0, 500, {text:t, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,alignmentY: Jimp.VERICAL_ALIGN_CENTER}, 1920,1080);
   // Writing image after processing
   await image.writeAsync('bakgrund.png');
}

function tid(){

try {
	var time = new Date();
s=    ("0" + time.getHours()).slice(-2)   + ":" +  ("0" + time.getMinutes()).slice(-2) + ":" +  ("0" + time.getSeconds()).slice(-2)
console.log(s)
textOverlay(s)
} catch (error) {
  console.error(error);
}
}

setInterval(tid, 1000)

tid()



