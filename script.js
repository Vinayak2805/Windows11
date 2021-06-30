let taskbar = document.querySelector('.taskbar');
let startmenu = document.querySelector('.startmenu');

taskbar.addEventListener('click', ()=>{
    if(startmenu.style.bottom == "60px"){
        startmenu.style.bottom = "-650px"
    }
    else{
        startmenu.style.bottom = "60px"
    }
})