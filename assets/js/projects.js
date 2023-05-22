const worksApis = [
    {
        img: "./images/work/work1.png",
        template: "https://mohamedkhaled22669.github.io/Template-S1/",
        linkGithub: "https://github.com/mohamedkhaled22669/Template-S1",
        hintTemplate: "HTML>CSS>JS",
    },
    {
        img: "./images/work/screencapture-mohamedkhaled22669-github-io-cyborg-react.png",
        template: "https://mohamedkhaled22669.github.io/cyborg-react/",
        linkGithub: "https://github.com/mohamedkhaled22669/cyborg-react",
        hintTemplate: "React",
    },
    {
        img: "./images/work/work3.png",
        template: "https://mohamedkhaled22669.github.io/React-redux-toolkit-CRUD/",
        linkGithub: "https://github.com/mohamedkhaled22669/React-redux-toolkit-CRUD",
        hintTemplate: "React-Redux-toolkit",
    },

]


// show project with extra file  
let allProjects = document.getElementById('projects')

worksApis.forEach(work => {
    allProjects.innerHTML += `
        <div class="project"  >
            <img src="${work.img}">
            <div class="links-website">
                <a href=${work.template} target="_blank">Website <i class="fas fa-eye"></i></a>
                <a href=${work.linkGithub} target="_blank">Coding <i class="fab fa-github"></i></a>
            </div>
            <div class="hint">
            ${work.hintTemplate}
            </div>
        </div>`
});