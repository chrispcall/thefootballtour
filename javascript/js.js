const navigation = document.querySelector('.nav-container');
const header = document.querySelector('#header');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');

document.querySelector('.hamburger').addEventListener('click', function () {
    navigation.classList.toggle('navigation_on');
    header.classList.toggle('header_on');
    hamburger.classList.toggle('is-active');
  })

//change opacity of the logo on smaller screen as we scroll down  
const half_height = window.innerHeight / 2;
let percent_visible = 1;

function checkPosition() {
    percent_visible = (half_height - window.scrollY) / half_height;
    logo.style.opacity = percent_visible;
    hamburger.style.opacity = percent_visible;
    if (percent_visible < 0){
        logo.style.visibility = 'hidden';
        hamburger.style.visibility = 'hidden';
    }
    else{
        logo.style.visibility = 'visible';
        hamburger.style.visibility = 'visible';
    }
}

//listener for the logo opacity thing
window.addEventListener('scroll', checkPosition);