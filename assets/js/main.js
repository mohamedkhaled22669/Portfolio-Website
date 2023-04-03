// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->



// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->



// toggle navbar
let btnToggle =document.querySelector('.navbar .toggle-menu');

// show nav bar 
let navbarToggle =document.querySelector('.navbar .toggle');

// function show and hide navbar
btnToggle.onclick = function() {

  navbarToggle.classList.toggle('nav-toggle')
}


// select Skills Selector
let ourSkills = document.querySelector('.skills');

window.onscroll = function () {

  // Skills offset Top
  let skillOffsetTop = ourSkills.offsetTop;

  // Skkills outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Windows Height
  let windowHeight = this.innerHeight;

  // window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillOffsetTop + skillsOuterHeight - windowHeight - 200)) {
    let allSkill = document.querySelectorAll('.skills .skills-box .skill-progress span');

    allSkill.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    })
    console.log(windowHeight);
  }
  // else if (windowScrollTop < (skillOffsetTop + skillsOuterHeight - windowHeight  200 )) {
  //   let allSkill = document.querySelectorAll('.skills .skills-box .skill-progress span');
  //   allSkill.forEach(skill => {
  //     skill.style.width = 0;
  //   })
  // }
}



// Function scroll smooth
// select all links  from header
const allLinksHeader = document.querySelectorAll('.header .navbar a');

// select all links from footer
const allLinksFooter = document.querySelectorAll('.footer .box a');

function scrollToSectionSmooth(ele) {
  ele.forEach(ele => {
    ele.addEventListener('click' , (e) => {
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};


scrollToSectionSmooth(allLinksHeader);
scrollToSectionSmooth(allLinksFooter);


