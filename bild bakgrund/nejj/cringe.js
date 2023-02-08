import {getWallpaper, setWallpaper} from 'wallpaper';

function loop(){
setWallpaper('../bakgrund.png');	
console.log('pang')
}

loop()
setInterval(loop, 1000)
