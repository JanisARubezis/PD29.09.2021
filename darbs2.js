function zim(){
    var zim= document.getElementById('vieta').getContext('2d'); 
    zim.fillStyle= "#FFFF00"
    //center
    zim.beginPath();
    zim.arc(100, 100, 50, 0, 2 * Math.PI);
    zim.stroke();
    zim.fill()
    //rays
    zim.fillRect(95,0,10,40);
    zim.fillRect(95,160,10,40);
    zim.fillRect(0,95,40,10);
    zim.fillRect(160,95,40,10);
}