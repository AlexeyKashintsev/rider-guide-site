/**
 * Created by ilyaanuchin on 04.10.16.
 */
var mouseX = 0, mouseY = 0;
var followX = 0, followY = 0;
var movingStop = 150;
var windowHalfX = window.innerWidth >> 1;//середина экрана
var windowHalfY = window.innerHeight >> 1;
var moveX = 0; var moveY = 0;

window.addEventListener("mousemove", function(k) {
    movingStop = 150;//коэффициент притормаживания движения
    mouseX = ( k.clientX - windowHalfX );//разница от центра
    mouseY = ( k.clientY - windowHalfY );
});


timerParallax = setInterval(function(){
    movingStop += 10;//останавливаем картинку
    searchWayX();//изменяем координаты по х
    searchWayY();//изменяем координаты по у
    moveX = (mouseX - followX) / movingStop;//делаем новый шаг
    moveY = (mouseY - followY) / movingStop;
},30);


function searchWayX(){//перерисовываем по х в заданных рамках
    if (followX < windowHalfX && followX - moveX < 60 && followX - moveX > -130) {
        followX -= moveX;//разница сдвига
        image1.style.left = followX * 2 + 'px';
        image2.style.left = followX + 'px'
    }
}


function searchWayY() {//перерисовываем по у в заданных рамках
    if (followY - moveY > 0 && followY - moveY < 60) {//отслеживаем направление(выше от цента)
        followY -= moveY;//разница сдвига
        image1.style.top = followY * 2 + 'px';
        image2.style.top = followY + 'px';
    }
}
