const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function lampDeF () {
    return lamp.src.indexOf ( 'rainhaeliza' ) > -1
}
function lampOn (){
    if ( !lampDeF () ) {
    lamp.src = './img/lampOn.png';
    }
}
function lampOff (){
    if ( !lampDeF () ) {
    lamp.src = './img/lampOff.png';
    }
}
function lampDeF (){
    lamp.src = './img/rainhaeliza.png';
}

turnOn.addEventListener ( 'click',lampOn );
turnOff.addEventListener ( 'click',lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampDeF );
