/*========================================
    Email: mohdfayeem3@gmail.com
    Contact: +91-7275716753
    Developer: Mohd Fayeem
=========================================*/
/* Light & dark Theme Toggle function */
const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

$('.toggle input[type="checkbox"]').click(function (){
    if($(this).prop("checked") === true){
        $(".indicator-icon").removeClass('fa-moon');
        $(".indicator-icon").addClass('fa-sun');
        $(".label-text").html('Light Mode');
    }else{
        $(".indicator-icon").removeClass('fa-sun');
        $(".indicator-icon").addClass('fa-moon');
        $(".label-text").html('Dark Mode');
    }
});

if (currentTheme === 'dark') {
    $(".indicator-icon").removeClass('fa-moon');
    $(".indicator-icon").addClass('fa-sun');
    $(".label-text").html('Light Mode');
}
if(currentTheme === 'light'){
    $(".indicator-icon").removeClass('fa-sun');
    $(".indicator-icon").addClass('fa-moon');
    $(".label-text").html('Dark Mode');
}
/* Light & dark Theme Toggle function End */