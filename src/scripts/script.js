//Estrutura de decisão
const agora = new Date();
const hora = agora.getHours();

let mensagem = "";

if (hora >= 5 && hora < 12) {
    mensagem = "<i class='fa-solid fa-sun' style='color: var(--yellow);' id='sun'></i> Bom Dia!";
} 
else if (hora >= 12 && hora < 18) {
    mensagem = "<i class='fa-solid fa-cloud-sun' style='color: var(--red);'></i> Boa Tarde!";
} 
else {
    mensagem = "<i class='fa-solid fa-moon' style='color: var(--deep-blue);'></i> Boa Noite!";
}

document.getElementById("mensagem").innerHTML = mensagem;


//Função
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 150) {
    header.classList.add('rolando');
  } else {
    header.classList.remove('rolando');
  }
});

function renderizarForms() {
    const listaForms = [
        { nome: "FATEC - JESSEN VIDAL", tipo: "Curso superior", duracao: "3 anos", foto: "src/img/fatec.jpg"},
        { nome: "COLÉGIO TÉCNICO OPÇÃO", tipo: "Curso tecnico", duracao: "3 anos", foto: "src/img/opcao.png" },
        { nome: "ETEP", tipo: "Curso tecnico", duracao: "1 ano", foto: "src/img/etep.png" }
    ];

    const container = document.getElementById('forms-left-container');
    for (let i = 0; i < listaForms.length; i++) {
        const item = listaForms[i];
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div id="photo"><img src="${item.foto}"></div>
                <div id="content">
                    <div id="title">
                        <h1>${item.nome}</h1>
                    </div>
                    <div id="info">
                        <div class="info-info">
                            <div class="info-info-left">
                                <p style="color: var(--blue);">Tipo:</p>
                            </div>

                            <div class="info-info-right">
                                <p>${item.tipo}</p>
                            </div>
                        </div>

                        <div class="info-info">
                            <div class="info-info-left">
                                <p style="color: var(--blue);">Duração:</p>
                            </div>

                            <div class="info-info-right">
                                <p>${item.duracao}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `;
                            
        container.appendChild(card);
}
    observer.observe(document.getElementById('forms-left-container'));
}

window.onload = () => [
    renderizarForms()
]

// Comandos de repetição
const listaCursos = [
    {nome: "Certificado Git Básico", img: "src/img/certificados/certGit.png"},
    {nome: "Certificado Assiduidade Exército", img: "src/img/certificados/certTG.jpeg"},
    {nome: "Certificado Redação nota 1000", img: "src/img/certificados/certificado1.jpg"},
    {nome: "Certificado Projeto python", img: "src/img/certificados/certificado2.jpg"},
    {nome: "Certificado Banco de Dados", img: "src/img/certificados/certificado3.png"},
    {nome: "Certificado Escola de inovadores", img: "src/img/certificados/certificado4.png"},
    {nome: "Certificado Modelagem de dados", img: "src/img/certificados/certificado5.png"},
    {nome: "Certificado IA no Governo Federal", img: "src/img/certificados/certificado6.png"}
];

const container = document.getElementById("courses-container")

for(let i = 0; i < listaCursos.length; i++){
    container.innerHTML += `
        <div class="course-card">
            <div class="course-card-top">
                <img src="${listaCursos[i].img}">
            </div>

            <div class="course-card-bottom">
                <div class="course-title">
                    <p>${listaCursos[i].nome}</p>
                </div>
            </div>
        </div> `;
}



const listaProjetos = [
{
nome: "SAMA",
descricao: "O SAMA é um sistema desenvolvido para digitalizar o envio de atestados médicos e facilitar a avaliação contínua de equipes ágeis. Ele otimiza a gestão de documentos, melhora a comunicação entre usuários e simplifica processos administrativos. O projeto foi desenvolvido utilizando a metodologia ágil Scrum com entregas em sprints.",
tecnologias: "<i class='fa-brands fa-python'></i> <i class='fa-brands fa-html5'></i> <i class='fa-brands fa-css'></i> <i class='fa-brands fa-square-js'></i>",
link: "https://github.com/dottecteam/SAMA-API"
},

{
nome: "Bibliogames",
descricao: "O Bibliogames é um sistema para organizar e registrar jogos digitais já jogados pelo usuário, funcionando como uma biblioteca pessoal. Foi desenvolvido inicialmente para uso individual, mas pode ser expandido para múltiplos usuários. Utiliza um banco de dados simples em SQLite e foi desenvolvido com Flask.",
tecnologias: "<i class='fa-brands fa-html5'></i> <i class='fa-brands fa-css'></i> <i class='fa-brands fa-square-js'></i> <i class='fa-brands fa-python'></i> <i class='fa-solid fa-database'></i>",
link: "#"
},

{
nome: "PDI",
descricao: "Sistema desenvolvido para otimizar a criação e gestão de Planos de Desenvolvimento Individual (PDI). A aplicação centraliza metas e acompanhamento de evolução profissional, auxiliando líderes na gestão de equipes e promovendo uma cultura de melhoria contínua.",
tecnologias: "<i class='fa-brands fa-java'></i> <i class='fa-solid fa-database'></i>",
link: "https://github.com/dottecteam/PDI"
},

{
nome: "Mães que Oram",
descricao: "Sistema desenvolvido para organizar e gerenciar encontros do grupo Mães que Oram pelos Filhos em uma paróquia. Permite cadastro de participantes, gerenciamento de encontros e geração automática de relatórios em arquivos .txt.",
tecnologias: "<i class='fa-brands fa-java'></i>",
link: "#"
}
];

const containerProj = document.getElementById("projects-container")

for(let i = 0; i < listaProjetos.length; i++){
    containerProj.innerHTML += `
        <div class="project-card">
        <div id="project-title">
            <div id="p-title">
                <h1 style="color: var(--deep-blue); font-weight: bold;">${listaProjetos[i].nome}</h1>
            </div>
        </div>

        <div id="project-content">
            <div id="project-desc">
                <div id="p-desc-title"><h2 style="padding: 15px;font-family: 'Title-thin', sans-serif; color: var(--blue);">Descrição</h2></div>
                <div id="p-desc-content">
                    <p>${listaProjetos[i].descricao}</p>
                </div>
            </div>
        </div>

        <div id="project-link">
            <div id="project-techs">
                <div id="techs-title"><h3 style="font-family: 'Title-thin', sans-serif; color: var(--blue);">Tecnologias</h3></div>
                <div id="techs-icons">${listaProjetos[i].tecnologias}</div>
            </div>

            <div id="p-link">
                <a href="${listaProjetos[i].link}" class="btn-link" target="_blank">Saiba mais</a>
            </div>
        </div>
    </div> `;
}