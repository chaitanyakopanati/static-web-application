const mobileMenu=document.querySelector('.mobile-menu');
const mobileClose=document.querySelector('.mobile-close');
const mobileNavigation=document.querySelector('.mobile-navigation');

events
mobileMenu.addEventListener('click',()=>{
    mobileNavigation.classList.add('active');
    mobileClose.classList.add('active');
});
mobileClose.addEventListener('click',()=>{
    mobileNavigation.classList.remove('active');
    mobileClose.classList.remove('active');
})
/* JavaScript to toggle menu on mobile view */
// document.querySelector('.mobile-menu').addEventListener('click', function() {
//     document.querySelector('.mobile-navigation').classList.toggle('active');
//     document.querySelector('.mobile-menu').style.display = 'none';
//     document.querySelector('.mobile-close').style.display = 'block';
// });

// document.querySelector('.mobile-close').addEventListener('click', function() {
//     document.querySelector('.mobile-navigation').classList.toggle('active');
//     document.querySelector('.mobile-close').style.display = 'none';
//     document.querySelector('.mobile-menu').style.display = 'block';
// });