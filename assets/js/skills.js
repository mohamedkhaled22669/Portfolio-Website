const skillsApis = [
    {
        skill_name:"HTML",
        skill_progress:"95%",
    },
    {
        skill_name:"CSS",
        skill_progress:"90%",
    },
    {
        skill_name:"JavaScript",
        skill_progress:"83%",
    },
    {
        skill_name:"Bootstrap",
        skill_progress:"90%",
    },
    {
        skill_name:"React",
        skill_progress:"85%",
    },
    {
        skill_name:"Redux",
        skill_progress:"88%",
    },
    {
        skill_name:"Tookit",
        skill_progress:"85%",
    },
    {
        skill_name:"NodeJS",
        skill_progress:"65%",
    },{
        skill_name:"Express.js",
        skill_progress:"70%",
    },
    {
        skill_name:"Python",
        skill_progress:"55%",
    },
    {
        skill_name:"Django",
        skill_progress:"65%",
    },

]



// show skills with other fille
let skillsBoxPerant = document.getElementById('skills_JS');

skillsApis.forEach(skill => {
    skillsBoxPerant.innerHTML += `
    <div class="skills-box">
        <div class="skill-name">${skill.skill_name}</div>
        <div class="skill-progress">
            <span data-progress="${skill.skill_progress}"></span>
        </div>
    </div>`
});