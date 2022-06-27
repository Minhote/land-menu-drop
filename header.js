/* Menu Dropdown */

let nav = document.querySelector('.header__nav')
let liDrop = document.querySelectorAll('.header__nav--container__item i')
let subcontainer = document.querySelectorAll('.header__nav--container__item--subcontainer')
let navContainerItem = document.querySelectorAll('.header__nav--container__item')
//console.log(listItemsNav, subcontainer[0]);

liDrop.forEach((el, index) =>{
    el.addEventListener('click', ()=> {
        if(window.innerWidth > 800){
            if (liDrop[index].classList.contains('fa-sort-down')) {
                /* Change Icon and Show Submenu */
                subcontainer[index].style.display = 'block';
                liDrop[index].classList.remove('fa-sort-down')
                liDrop[index].classList.add('fa-sort-up')
                
            }else if(liDrop[index].classList.contains('fa-sort-up')){
                /* Change Icon and Show Submenu */
                subcontainer[index].style.display = 'none';
                liDrop[index].classList.remove('fa-sort-up')
                liDrop[index].classList.add('fa-sort-down')
            }
        }else if(window.innerWidth < 800){
            if (liDrop[index].classList.contains('fa-sort-down')) {
                /* Change Icon and Show Submenu */
                subcontainer[index].style.display = 'block';
                liDrop[index].classList.remove('fa-sort-down')
                liDrop[index].classList.add('fa-sort-up')

                /* Add Margin to next sibling */
                navContainerItem[index].style.marginBottom =(subcontainer[index].clientHeight+20) + "px";

            }else if(liDrop[index].classList.contains('fa-sort-up')){
                /* Change Icon and Show Submenu */
                subcontainer[index].style.display = 'none';
                liDrop[index].classList.remove('fa-sort-up')
                liDrop[index].classList.add('fa-sort-down')

                /* Cut Margin to next sibling */
                navContainerItem[index].style.marginBottom ="1rem";
            } 
        }
    })
})

/* Responsive Nav */

let hamburger = document.querySelector('.header__nav--hamburger')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
})


