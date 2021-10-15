async function grabImages(name, id){
    let result;

    try {
        result = await $.ajax({
            type:"get",
            url:"https://raw.githubusercontent.com/Luc2000/"+name+"/master/background/background.jpg",
        });

        return result;
    } catch (error) {

    }
}

function insertImages(data, id, name){
    if(data){
        $('#repo_'+id+' .repo-background').css('background-image', "url(https://raw.githubusercontent.com/Luc2000/"+name+"/master/background/background.jpg)");
    }
}


function competencias(){
    fetch("./abilities.json")
        .then(response => response.json())
        .then($('.projects-list').html(`<ul id="competencias_gerais" class="d-flex flex-wrap justify-content-between"></ul>`))
        .then(data => 
            data.forEach(competencia => {
                $('#competencias_gerais').append(`
                    <li class="competencia card d-flex flex-wrap position-relative mb-35 ">
                        <div class="d-block header-competencia text-center">
                            <div class="stats mb-3">
                                ${competencia.icon}
                            </div>
                            <b>${competencia.name}</b>
                        </div>
                        <p class="mt-35">${competencia.description}</p>
                    </li>
                `);
            })
        ).catch(function() {
            console.log("Erro ao puxar JSON de competências");
        });
}


// Inserir em languages dps: para detalharsua formação front back etc 
// <div class="more_about d-flex col-12 align-items-center">
//      <a href="/front-end" target="_blank"><i class="fas fa-question-circle"></i><b> Mais detalhes</b></a>                                         
// </div> 
function languages(){
    fetch("./languages.json")
        .then(response => response.json())
        .then($('.projects-list').html(`<ul class="d-flex flex-wrap justify-content-between" id="languages"></ul>`))
        .then(data => 
            data.forEach(materia => {
                var status = '';
                switch (materia.status) {
                    case 0:
                        status = 'estudando'
                        break;
                    case 1:
                        status = 'experiente'
                        break;
                    case 2:
                        status = 'estudado'
                        break;
                    default:
                        break;
                }
                $('#languages').append(`
                    <li class="d-flex flex-wrap card position-relative mb-35">
                        <div class="tag ${status} position-absolute">
                            <span class="text-capitalize">${status}</span>
                        </div>
                        <div class="content-card">
                            <img src=${materia.iconUrl} alt="${materia.name}" class="logo-materia">
                            <h4 class="mt-3"><b>${materia.name}</b></h4>

                            <div class="grades-content row mt-20">
                                <div class="ability d-flex col-12" tabindex="0" data-toggle="tooltip" title="Habilidade" data-placement="top">
                                    <div class="d-flex progress">
                                        <i class="fas fa-fire"></i>                                              
                                        <div class="progress-bar">
                                            <div class="progress-done" data-done="${materia.ability}" style="width:${materia.ability}%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ability d-flex col-12" tabindex="0" data-toggle="tooltip" title="Experiência" data-placement="top">
                                    <div class="d-flex progress">
                                        <i class="fas fa-hourglass-half"></i>                                                
                                        <div class="progress-bar">
                                            <div class="progress-done" data-done="${materia.experience}" style="width:${materia.experience}%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ability d-flex col-12" tabindex="0" data-toggle="tooltip" title="Boas práticas" data-placement="top">
                                    <div class="d-flex progress">
                                        <i class="fas fa-code"></i>                                                
                                        <div class="progress-bar">
                                            <div class="progress-done" data-done="${materia.code}" style="width:${materia.code}%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ability d-flex col-12">
                                    <b>Projetos Feitos: ${materia.projects}</b>                                              
                                </div>
                               
                            </div>
                        </div>
                    </li>
                `);
            })
        ).catch(function() {
            console.log("Erro ao puxar API");
        });
}

function projects(){
    $.ajax({
        type:"get",
        url:"https://api.github.com/users/Luc2000/repos",
        dataType:"json"
    }).done(function(data){
        $('.projects-list').html(`<ul id="github_repos" class="d-flex flex-wrap justify-content-between"></ul>`);

        data.forEach(repo => {
            var background_img = "assets/img/github.png";
            var date = new Intl.DateTimeFormat('pt-BR').format(new Date(repo.created_at));

            $('#github_repos').append(`
                <li class="repo d-flex flex-wrap position-relative mb-35" id="repo_${repo.id}">
                    <div class="repo-background" style="background-image: url(${background_img})">
                    </div>
                    <div class="repo-body d-block flex-wrap">
                        <p class="my-2"><i class="far fa-calendar-alt mr-2 "></i>${date}</p>
                        <p class="my-3"><i class="fas fa-info mx-1"></i>`+(repo.description ? repo.description : 'Projeto feito no Github, sem descrição.')+`</p>
                        `+(repo.homepage ? '<p class="my-2"><i class="fas fa-globe mr-1"></i> <a href="'+repo.homepage+'" target="_blank" rel="noopener">'+repo.homepage+'</a></p>' : '')+`
                    </div>
                    <div class="ver_git">
                        <p><a href="${repo.html_url}" target="_blank" rel="noopener">Ver no Github <i class="fab fa-github ml-2"></i></i></a></p>
                    </div>
                </li>
            `);
            grabImages(repo.name,repo.id).then((data) => insertImages(data,repo.id, repo.name));
        });             
    }).fail(function(data){
        alert('Erro ao exibir, tente novamente mais tarde');
    });
}

function courses(){
    fetch("./courses.json")
        .then(response => response.json())
        .then($('.projects-list').html(`<ul id="cursos" class="d-flex flex-wrap justify-content-between"></ul>`))
        .then(data => 
            data.forEach(curso => {
                $('#cursos').append(`
                    <li class="curso card d-flex flex-wrap position-relative mb-35 ">
                        <div class="header-curso d-flex mb-2 w-100 align-items-center">
                            <img src=${curso.iconImg} alt="${curso.course}" class="mr-3 mb-3"/>
                            <b>${curso.course}</b>
                        </div>
                        <div class="body d-block">
                            <p><i class="far fa-calendar-alt"></i> ${curso.date}</p>
                            <p class="my-3"><i class="fas fa-map-marker-alt"></i> <a href="${curso.where}" target="_blank" rel="noopener">${curso.where}</a></p>
                            <p><i class="fas fa-info"></i> ${curso.about}</p>
                        </div>
                    </li>
                `);
            })
        ).catch(function() {
            console.log("Erro ao puxar JSON de competências");
        });
}

$(function(){
    competencias();
});
