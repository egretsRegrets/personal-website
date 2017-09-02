import '../styles/style.scss';

// page state

const views = ["About", "Portfolio", "Blog"];
let currentView = "About";

// html elements

let viewSurfaceTxt = document.getElementById('currentView');
let leftArrow = document.getElementsByClassName('arrow__left')[0];
let rightArrow = document.getElementsByClassName('arrow__right')[0];
let contentLayers = document.getElementsByClassName('layer__content');

// event listeners

leftArrow.addEventListener('click', changeView);
rightArrow.addEventListener('click', changeView);

// side-effect functions

function selectCurrentView() {
    let hiddenLayers = document.getElementsByClassName('layer--hidden');
    let bioLayer = document.getElementsByClassName('layer__bio')[0];
    let portfolioLayer = document.getElementsByClassName('layer__portfolio')[0];
    if (getCurrentView().currentViewIndex === 0){
        // remove hidden: all
        if (hiddenLayers.length) {
            for(let i = 0; i < hiddenLayers.length; i++){
                hiddenLayers[i].classList.remove('layer--hidden');
            }
        }
    } else if (getCurrentView().currentViewIndex === 1) {
        // remove hidden: portfolio - hide bio
        if (!bioLayer.classList.contains('layer--hidden')){
            bioLayer.classList.add('layer--hidden');
        }
        if (portfolioLayer.classList.contains('layer--hidden')){
            portfolioLayer.classList.remove('layer--hidden');
        }
    } else if (getCurrentView().currentViewIndex === 2) {
        // hide portfolio - remove hidden: bio
        if (bioLayer.classList.contains('layer--hidden')){
            bioLayer.classList.remove('layer--hidden');
        }
        if (!portfolioLayer.classList.contains('layer--hidden')){
            portfolioLayer.classList.add('layer--hidden');
        }
    }
    
}

function surfaceView() {
    selectCurrentView();
    viewSurfaceTxt.innerText = getCurrentView().currentView;
}

// ui var consumption

function getCurrentView (){
    return {currentView, currentViewIndex: views.indexOf(currentView)};
}

function changeView (event){
    if(event.target.classList.contains('arrow')){
        if (event.target === leftArrow){
            if(getCurrentView().currentViewIndex === 0){
                currentView = views[2];
            } else {
                currentView = views[getCurrentView().currentViewIndex - 1];
            }
        }
        if (event.target === rightArrow){
            if(getCurrentView().currentViewIndex === 2){
                currentView = views[0];
            } else {
                currentView = views[getCurrentView().currentViewIndex + 1];
            }
        }
    }
    surfaceView();
}

// manual run

//surfaceView();