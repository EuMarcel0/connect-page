// JS DEFAULT - MANUAL


// -----ABRIR MENU CELULAR ------


function openedMenu(){
    let menuMobile = document.getElementById('mobileMenu');

        if(menuMobile.style.width == '400px'){
            menuMobile.style.width = '0px';
        }else{
            menuMobile.style.width = '400px';
        }
}

// ----- FECHAR MENU ------

function closeMenu(){
    let menuMobile = document.getElementById('mobileMenu');
        if(menuMobile.style.width == '400px'){
            menuMobile.style.width = '0px';
        }
}

function scrollBar(){
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    });
};

function controlarBotao(){
    if (window.scrollY == 0){
        document.querySelector(".btnTop").style.display = 'none'; 
    } else{
        document.querySelector(".btnTop").style.display = 'block';
    }
};
window.addEventListener("scroll", controlarBotao);


// ------AREA SLIDER - SEGMENTOS------- 


let totalSlides = document.querySelectorAll('.sectionSegments--slide').length;
let actualSlide = 0;
let sliderWidth = document.querySelector('.sectionSegments--slide').clientWidth;

document.getElementById('areaSliderSegments').style.width = `${sliderWidth * totalSlides}px`;


function backSlide() {
    actualSlide--;
    if(actualSlide < 0){
        actualSlide = totalSlides - 1;
    }
    updateMargin();
}
function nextSlide() {
    actualSlide++;
    if(actualSlide > totalSlides-1){
        actualSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let slideItemWidth = document.querySelector('.sectionSegments--slide').clientWidth;
    let newMargin = (actualSlide * slideItemWidth);
    document.getElementById('areaSliderSegments').style.marginLeft = `-${newMargin}px`;
};




/*SLIDE AREA DE CRRENS - TELAS*/

let totalSliderTelas = document.querySelectorAll('.section-screens--slide').length;
let actualSliderTelas = 0;
let slideTelasWidth = document.querySelector('.section-screens--slide').clientWidth;

document.getElementById('section-screens--sliders').style.width = `${totalSliderTelas * slideTelasWidth}px`;


function backSlideTelas(){
    actualSliderTelas --;
    if(actualSliderTelas < 0 ){
        actualSliderTelas = totalSliderTelas -1;
    }
    updateMarginTelas();
}

function nextSlideTelas(){
    actualSliderTelas++;
    if(actualSliderTelas > totalSliderTelas -1){
        actualSliderTelas = 0;
    }
    updateMarginTelas();
}

function updateMarginTelas(){
    let screenSlideWidth = document.querySelector('.section-screens--slide').clientWidth;
    let newMarginScreen = (actualSliderTelas * screenSlideWidth);
    document.getElementById('sectionSliderScreens').style.marginLeft = `-${newMarginScreen}px`;
}

