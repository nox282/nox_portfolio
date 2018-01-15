document.addEventListener('DOMContentLoaded', () => {

let availableLanguagesdisplay = ['English', 'Français'];
let availableLanguages = ['English', 'Francais']
let langSwitch = availableLanguages[0];
let currentPage;

// HTML ELEMENTS ##########################################

const renderHeaderElement = (resume, lang) => {
    return `<div class="row">
                <div class="col-lg-12">
                    <div>
                        <img class="img-fluid mb-5 d-block mx-auto" src="${resume.pictureURL}" alt="">
                    </div>
                    <div class="intro-text">
                        <span class="name">${resume.firstname} ${resume.lastname}</span>
                        <hr class="star-light">
                        <span class="skills">${(lang == 'English') ? `Video Game Developer` : `Développeur Jeux Vidéo`}</span><br/>
                        <span class="skills">${resume.location}</span>
                    </div>
                </div>
            </div>`
}

const renderNavBarElement = () => {
    return `<nav id="navbar-object" class="navbar navbar-default">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#resume">Résumé</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#hiringInfo">Hiring infos</a>
                    </li>
                    <li class="page-scroll">
                        <div class="dropdown">
                            <button class="btn btn-primary navbar-dropdown-btn navbar-dropdown-btn-primary dropdown-toggle" type="button" data-toggle="dropdown" id="lang-switch">${langSwitch}</button>
                            <ul class="dropdown-menu">
                                ${availableLanguages.map((language) => `${(language != langSwitch) ? `<li><a href="#${language}">${availableLanguagesdisplay[availableLanguages.indexOf(language)]}</a></li>`:``}`).join('')}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>`;
}

const renderItem = (index, item) => {
    return `<div class="col-sm-4 portfolio-item">
                <a href="#${"portfolioModal"+index}" class="portfolio-link" data-toggle="modal">
                    <div class="caption">
                        <div class="caption-content">
                            <span>${item.title}</span>
                        </div>
                    </div>
                    <img src="${item.imageURL}" class="img-responsive" alt="">
                </a>
          </div>`;
}

const renderModal = (index, item, lang) => {
    return `<div class="portfolio-modal modal fade" id="${"portfolioModal"+index}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="container modal-container">
                <div class="row row-modal-content">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>${item.title}</h2>
                            <hr class="star-primary"/>
                            <img src="${item.imageURL}" class="img-responsive img-centered" alt=""/>
                            
                            <h3>Description</h3>
                            <hr class="star-primary"/>

                            <p>${item.description}</p>
                            
                            ${item.note ? 
                            `<p>note : ${item.note}</p>` : ``}
                            <br />
                            
                            ${item.gameEngine ? `<p><strong>GameEngine</strong> : ${item.gameEngine}</p>`: ``}
                            
                            ${(item.team.length > 0) ? 
                            `<ul class="list-inline item-details"><strong>By : </strong>
                                ${item.team.map((person) => `<li><strong>${(person.url != '') ?
                                `<a href="${person.url}" class="portfolio-link">${person.name}</a>` : `${person.name}`}
                                </strong></li>`).join()}
                            </ul>`: ''}
                            
                            ${(item.technologies.length > 0) ? 
                            `<ul class="list-inline item-details"><strong>Technologies :</strong>
                                ${item.technologies.map((techno) => `<li>${techno}</li>`).join()}
                            </ul>`: ''}
                            
                            <p>${(item.url != '') ? `<strong>URL : <a href="${item.url}" class="portfolio-link">${item.url}</a></strong><br/>`:``}
                            <strong>Sources : <a href="${item.sourceURL}" class="portfolio-link">${item.sourceURL}</a></strong><br/>
                            ${(item.videoURL != '') ? `<strong>Video : <a href="${item.videoURL}" class="portfolio-link">${item.videoURL}</a></strong>`:``}</p>
                            
                            ${(item.controls.length != 0) ? 
                            `<h3>Controls</h3>
                            <hr class="star-primary"/>
                            <ul>
                                ${item.controls.map((control) => `<li>${control}</li>`).join('')}
                            </ul>` : ``}
                            
                            ${(item.screenshots.length > 0) ?
                            `<h3>Screenshots</h3>
                            <hr class="star-primary"/>
                            <ul class="list-inline item-details">
                            ${item.screenshots.map((screenshot) => 
                                `<li>
                                    <img src="${screenshot}" class="img-responsive img-centered" alt=""/>
                                </li>`).join('')}
                            </ul>` : ``}
                            
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> ${(lang == 'English') ? `Close` : `Fermer`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

const renderResumeElements = (data, lang) => {
    return `<div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="resume-body">
                        <h3>${(lang == 'English') ? 'Profile' : 'Profil'}</h3>
                        <hr class="star-primary"/>
                        <p>${data.description}</p>
                        <br/>

                        <h3>${(lang == 'English') ? 'Employment history' : `Historique d'emploi`}</h3>
                        <hr class="star-primary"/>
                        <ul>
                            ${data.employment.map((job) => `<li>
                                <div class="container">
                                    <p><strong>${job.jobTitle}</strong> ${(lang == 'English') ? 'at' : 'à'} <strong>${job.company}</strong><br/>
                                    In ${job.location} ${(lang == 'English') ? 'from' : 'de'} ${job.from} ${(lang == 'English') ? 'to' : 'à'} ${job.to}</p>
                                    <p>${job.description ? `<strong>Description :</strong> ${job.description}`: ``}</p>
                                </div>
                            </li>`).join('')}
                        </ul>
                        
                        <h3>Education</h3>
                        <hr class="star-primary"/>
                        <ul>
                            ${data.education.map((item) => `<li>
                                <div class="container">
                                    <p>
                                    <a href="${item.url}" class="portfolio-link">${item.school}</a>.<br/>
                                    ${(lang == 'English') ? 'from' : 'de'} ${item.fromYear} ${(lang == 'English') ? 'to' : 'à'} ${item.toYear}.
                                    ${(item.diploma != '') ? `<br/>${item.diploma}` : ``}
                                    </p>
                                </div>
                            </li>`).join('')}
                        </ul>

                        <h3>${(lang == 'English') ? 'Technical Experience' : 'Experience Technique'}</h3>
                        <hr class="star-primary"/>
                        <ul class="list-inline">${data.technologies.map((techno) => `<li>${techno}</li>`).join(', ')}</ul>
                        <br/>

                        <h3>${(langSwitch == 'English') ? 'Languages' : 'Langues'}</h3>
                        <hr class="star-primary"/>
                        <ul class="list-inline">${data.languages.map((lang) => `<li>${lang}</li>`).join()}</ul>
                        
                        <div class="container">
                            <hr class="star-primary"/>
                            <p style="text-align: center;"><a href="/${lang}/resume/HamardNicolas-CV.pdf" download>
                            ${(lang == 'English') ? 'Download this résumé' : 'Télécharger ce C.V.'}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}


const renderHiringInfoElement = (data, lang) => {
    return `<div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="resume-body">
                        <h3>${(lang == 'English') ? 'Interested in' : 'Intéressé par'}</h3>
                        <hr class="star-primary"/>
                        <ul class="list-inline">
                            ${data.interestedIn.map((interest) => `<li><p>${interest}</p></li>`).join()}
                        </ul><br/>

                        <h3>${(lang == 'English') ? 'Contact/Social Media' : 'Contacte/Média'}</h3>
                        <hr class="star-primary"/>
                        
                        <ul>
                            ${data.socials.map((social) => `<li>
                                <p>
                                    <strong>${social.name} : </strong>
                                    ${(social.name == 'email')? 
                                    `<a href="mailto:${social.url}" class="portfolio-link">${social.url}</a>` :
                                    `<a href="${social.url}" class="portfolio-link">${social.url}</a>`}
                                </p>
                            </li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
}

// ########################################################
// FRAMEWORK FUNCTIONS ####################################


const checkClassName = (className) => {
    if(className.charAt(0) != '.') return '.' + className;
    else return className;
}

const render = (content, query) => {
    let element = document.querySelector(query);
    if(element)
        element.innerHTML = content;
}

const renderOOS = (lang) => {
    let content = `<div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="resume-body">
                                ${(lang == 'English') ? 
                                `<h1>Oops! It looks like something went wrong...</h1>
                                <p style="text-align: center;">Hopefully the service is back up shortly!</p>`:
                                `<h1>Oula! On dirait que quelque chose s'est mal passé...</h1>
                                <p style="text-align: center;">Espérons que le service sera bientôt rétabli !</p>`}

                            </div>
                        </div>
                    </div>
                </div>`
    render(content, '#main-content');
}

const renderHeaderSection = (resumes) => {
    let content = `${resumes.map((resume) => renderHeaderElement(resume, langSwitch)).join('')}`;
    if(content != '')
        render(content, '#header-container');
    
    return resumes;
}

const renderAllModals = (itemList) => {
    let content = `${itemList.map((item, i) => renderModal(i+1, item, langSwitch)).join('')}`;
    if(content != '')
        render(content, '.portfolio-all-modal-container')

    return itemList;
}

const renderItemList = (itemList) => {
    let content = `<div class="container">
                    <div class="portfolio-item-list row">
                        ${itemList.map((item, i) => renderItem(i+1, item)).join('')}
                    </div>
                </div>`;
    render(content, '#main-content');

    return itemList;
}

const renderResumePage = (resumes) => {
    let content = `${resumes.map((resume) => renderResumeElements(resume, langSwitch)).join('')}`;
    if(content != '')
        render(content, '#main-content');

    return resumes;
}

const renderHiringInfoPage = (resumes) => {
    let content = `${resumes.map((resume) => renderHiringInfoElement(resume, langSwitch)).join('')}`;
    if(content != '')
        render(content, '#main-content');

    return resumes;
}

const renderNavBar = () => {
    let content = renderNavBarElement();
    if(content != '')
        render(content, '#navbar-conainer');
}

//error handling on data fetch
const handleErrors = (response) => {
    if(!response.ok)
        throw Error(`${response.status} : ${response.statusText}`);
    return response;
}

const renderHeader = () => {
    fetch(`/${langSwitch}/resume`)
        .then((resp) => handleErrors(resp))
        .then((resp) => resp.json())
        .then((resp) => renderHeaderSection(resp))
        .catch((resp) => renderOOS());
}

const renderProjects = () => {
    fetch(`/${langSwitch}/projects`)
        .then((resp) => handleErrors(resp))
        .then((resp) => resp.json())
        .then((resp) => renderItemList(resp))
        .then((resp) => renderAllModals(resp))
        .catch((resp) => renderOOS());
}

const renderResume = () => {
    fetch(`/${langSwitch}/resume`)
        .then((resp) => handleErrors(resp))
        .then((resp) => resp.json())
        .then((resp) => renderResumePage(resp))
        .catch((resp) => renderOOS());
}

const renderHiringInfo = () => {
    fetch(`/${langSwitch}/resume`)
        .then((resp) => handleErrors(resp))
        .then((resp) => resp.json())
        .then((resp) => renderHiringInfoPage(resp))
        .catch((resp) => renderOOS());
}

const renderPage = (hash) => {
         if(hash == '#portfolio') renderProjects();
    else if(hash == '#resume') renderResume();
    else if(hash == '#hiringInfo') renderHiringInfo();
    
    hash = hash.replace('#', '');
    if(availableLanguages.indexOf(hash) >= 0)
        switchLanguage(hash);
}

const renderEverything = (hash) => {
    renderHeader();
    renderNavBar();
    renderPage(hash);
}

const switchLanguage = (lang) => {
    langSwitch = lang;

    renderEverything(currentPage);
}

// ########################################################



window.addEventListener('hashchange', (event) => {
    renderPage(window.location.hash);
    
    let a = document.querySelector(`[href='${window.location.hash}']`);
    if(a != undefined) {
        currentPage = window.location.hash;
        a.focus();
    }
});

window.location.hash = '#portfolio';
renderEverything(window.location.hash);
});