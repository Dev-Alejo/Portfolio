const $fragment = document.createDocumentFragment();

const img_data = [

{
    id: "html",
    caption: "HTML",
    img_path: "img/icons/html5.svg"
},
{
    id: "css",
    caption: "CSS",
    img_path: "img/icons/css3.svg"
},
{
    id: "javascript",
    caption: "JavaScript",
    img_path: "img/icons/javascript.svg"
},
{
    id: "MySql",
    caption: "SQL",
    img_path: "img/icons/mysql.svg"
},
{
    id: "git",
    caption: "Git",
    img_path: "img/icons/git.svg"
},
{
    id: "GitHub",
    caption: "GitHub",
    img_path: "img/icons/github.png"
},
{
    id: "VScode",
    caption: "VScode",
    img_path: "img/icons/vscode.svg"
},
{
    id: "Figma",
    caption: "Figma",
    img_path: "img/icons/figma.svg"
}];

const $tech_div = document.getElementById("tech-icons");

img_data.forEach(path => {

    const $div = document.createElement("div");
    $div.classList.add("tech-div");
    const $img = document.createElement("img");
    $img.src = path["img_path"];
    $img.alt = path["id"];
    const $h3 = document.createElement("h3");
    $h3.innerHTML = path["caption"];

    $div.appendChild($img);
    $div.appendChild($h3);

    $fragment.appendChild($div);
});

$tech_div.appendChild($fragment);

const projects_data = [{

    name: "Contador",
    technologies: "HTML, CSS, bootstrap y JavaScript",
    description: "Un contador de caracteres relaizado en equipo para la materia de JavaScript seccion N1113",
    url: "https://dev-alejo.github.io/Team-Code-Coffee/counter.html"
},
{
    name: "Team Codecoffee",
    technologies: "HTML, CSS, Bootstrap y JavaScript",
    description: "Pagina oficial del equipo para la materia de JavaScript seccion N1113.",
    url: "https://dev-alejo.github.io/Team-Code-Coffee/"
},
];
const $project_list_div = document.getElementById("project-list");

projects_data.forEach(project => {

    const $div = document.createElement("div");
    $div.classList.add("project-info");
    const $h3 = document.createElement("h3");
    $h3.innerHTML = project["name"];
    const $h4 = document.createElement("h4");
    $h4.textContent = project["technologies"];
    const $p = document.createElement("p");
    $p.textContent = project["description"];
    const $a = document.createElement("a");
    $a.classList.add("light-btn");
    $a.href = project["url"];
    $a.target = "_blank";
    $a.textContent = "Ver";

    $div.appendChild($h3);
    $div.appendChild($h4);
    $div.appendChild($p);
    $div.appendChild($a);

    $fragment.appendChild($div);
});

$project_list_div.appendChild($fragment);
