const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navList');

hamburger.addEventListener('click', ()=>
{
    if(nav.classList.contains('responsive-nav'))
    {
        nav.classList.remove('responsive-nav');
    }
    else
    {
        nav.classList.add('responsive-nav');
    }
})