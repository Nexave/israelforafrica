"use strict"

function openMobileMenu() {
    let mobileMEnuButton = document.querySelector('.header .mobile-menu-button')
    if(mobileMEnuButton){
        let html = document.querySelector('html');
        let mobileMenu = document.querySelector('.nav-menu-wrapper');
        let mobileCloseButton = document.querySelector('.nav-menu-wrapper .button-close');
        mobileMEnuButton.addEventListener('click', function () {
            html.classList.add('popup-open');
            mobileMenu.classList.add('open');
        })
        mobileCloseButton.addEventListener('click', function () {
            html.classList.remove('popup-open');
            mobileMenu.classList.remove('open');
        })
    }
}
openMobileMenu()

function toggleSortMenu() {
    let sortMenuButton = document.querySelector('.sorting-item .current-sorting')
    if (sortMenuButton){
        sortMenuButton.addEventListener('click', function (e) {
            let parent = e.target.closest('.sorting-item');
            parent.classList.toggle('open')
        })
        window.addEventListener('click', function (e) {
            if(!e.target.closest('.sorting-item') && document.querySelector('.sorting-item.open')){
                document.querySelector('.sorting-item.open').classList.remove('open')
            }


        })
    }
}
toggleSortMenu()

function filetMenuToggle() {
    let filterMenu = document.querySelector('.filter-form-wrapper');
    if(filterMenu){
        let filterMenuButton = document.querySelector('.filter-button')
        filterMenuButton.addEventListener('click', function () {
            filterMenu.classList.toggle('open')
        })
    }
}
filetMenuToggle()
