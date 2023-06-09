const cart = document.querySelector('.cart .cart-box')
const cartChow = document.querySelector('header .navbar .navbar-nav .nav-item p')
const iconClose = document.querySelector('.cart .cart-box .cart-title .icon')
const socalMedia = document.querySelector('.socalMedia')
iconClose.onclick = function(){
    cart.style.display = 'none'
}
cartChow.onclick = function(){
    cart.style.display = 'block'
}
window.onscroll = function(){
 if(window.scrollY >= "100"){
    socalMedia.classList.add('hide')
    socalMedia.classList.remove('show')
 }else{
    socalMedia.classList.add('show') 
    socalMedia.classList.remove('hide') 
 }
}


// jquery code 
$(function(){
    'use strict';
    $('body').css('paddingTop',$('.navbar ').innerHeight())
})
