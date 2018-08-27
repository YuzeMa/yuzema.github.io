const navSections = document.getElementsByClassName('nav-sections');
const sideMenu = document.getElementsByClassName('side-menu');
const home = document.getElementById('home');
const resume = document.getElementById('resume');
const experience = document.getElementById('experience');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');
const burgerMenuSwitch = document.getElementById('burger-menu-switch');
const sideMenuWrapper = document.getElementsByClassName('side-menu-wrapper')[0];

const arrayOfSections =[home,resume,experience,blog,contact];
let currentSectionIndex = 0;

/*-------- Nav Bar  -----*/
for (let i=0;i<navSections.length;i++) {
    navSections[i].addEventListener('click',()=>{
        arrayOfSections[currentSectionIndex].style.display = 'none';
        arrayOfSections[i].style.display = 'block';
        currentSectionIndex = i;
    })
}

/*-------- Side Nav Bar  -----*/
for (let i=0;i<sideMenu.length;i++) {
    sideMenu[i].addEventListener('click',()=>{
        arrayOfSections[currentSectionIndex].style.display = 'none';
        arrayOfSections[i].style.display = 'block';
        currentSectionIndex = i;
    })
}

/*-------- Burger Menu Switch Func -----*/
burgerMenuSwitch.addEventListener('click',()=>{
    sideMenuWrapper.style.display = (sideMenuWrapper.style.display === 'none') ? 'flex' : 'none';
})



