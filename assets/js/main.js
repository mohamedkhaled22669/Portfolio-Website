// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["frontend development", "backend development", "web designing", "web development"],
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
let ourSkills = document.querySelector('#skills');

// var to add active class to navbar
let homeScroll = document.getElementById('home')
let aboutScroll = document.getElementById("about-me")
let skillsScroll = document.getElementById("skills")
let workScroll = document.getElementById("work")
let contactScroll = document.getElementById("contact")



window.onscroll = function () {

  // Skills offset Top
  let skillOffsetTop = ourSkills.offsetTop;

  // Skkills outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Windows Height
  let windowHeight = this.innerHeight;

  // window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillOffsetTop - 100) {
    let allSkill = document.querySelectorAll('.skills .skills-box .skill-progress span');

    allSkill.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    })
  }
  // else if (windowScrollTop < (skillOffsetTop + skillsOuterHeight - windowHeight  200 )) {
  //   let allSkill = document.querySelectorAll('.skills .skills-box .skill-progress span');
  //   allSkill.forEach(skill => {
  //     skill.style.width = 0;
  //   })
  // }


  // console.log(workScroll.offsetTop + workScroll.offsetHeight);
  
  // if(this.pageYOffset > workScroll.offsetTop && this.pageYOffset < (workScroll.offsetTop + workScroll.offsetHeight)) {
  //   console.log("true");
  // }
  // else {
  //   console.log("flase");
  // }

  addClassToActiveLink(homeScroll)
  addClassToActiveLink(aboutScroll)
  addClassToActiveLink(skillsScroll)
  addClassToActiveLink(workScroll)
  addClassToActiveLink(contactScroll)
  
}

let addClassToActiveLink = function(section) {
  if(this.pageYOffset > section.offsetTop - 100  && this.pageYOffset < (section.offsetTop + section.offsetHeight + 100)) {
    let links = document.querySelectorAll('.header .navbar li a')
    links.forEach( (ele) => {
      // console.log(section.offsetTop);
      ele.classList.remove('active')

    })
    for (let i = 0; i < links.length;i++) {
      // let dataSections =links[i].dataset.section

      if (links[i].dataset.section === ("#" + section.id)) {
        links[i].classList.add('active')
        
      }
    }
  }
}



// Function scroll smooth
// select all links  from header
const allLinksHeader = document.querySelectorAll('.header .navbar a');

// select all links from footer
const allLinksFooter = document.querySelectorAll('.footer .box:nth-child(2) a');

// function many links
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

// select button about me 
const btnAboutMe = document.querySelector(".home .content .btn");

// function one link
// btnAboutMe.onclick = function(e) {

//   e.stopPropagation();  

//   e.preventDefault();

//   document.querySelector(e.target.dataset.section).scrollIntoView({
//     behavior: 'smooth'
//   });
// }

// function one link
function scrollToSectionSmoothOneItem(ele) {
  ele.addEventListener('click' , (e) => {
    e.stopPropagation()
    
    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    });
  });
};




scrollToSectionSmooth(allLinksHeader);
scrollToSectionSmooth(allLinksFooter);
scrollToSectionSmoothOneItem(btnAboutMe);



