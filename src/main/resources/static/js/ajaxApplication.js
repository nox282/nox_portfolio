document.addEventListener('DOMContentLoaded', () => {

let langSwitch = 'en';
let appHistory = [];

// HTML ELEMENTS ##########################################

const renderHeaderElement = (resume) => {
    return `<div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="${resume.pictureURL}" alt="">
                    <div class="intro-text">
                        <span class="name">${resume.firstname} ${resume.lastname}</span>
                        <hr class="star-light">
                        <span class="skills">Video Game Developer</span><br/>
                        <span class="skills">${resume.location}</span>
                    </div>
                </div>
            </div>`
}

const renderItem = (index, item) => {
    return `<div class="col-sm-4 portfolio-item">
                <a href="#${"portfolioModal"+index}" class="portfolio-link" data-toggle="modal">
                    <div class="caption">
                        <div class="caption-content">
                            <span>${item.title}</span>
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src="${item.imageURL}" class="img-responsive" alt="">
                </a>
          </div>`;
}

const renderModal = (index, item) => {

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
                                ${item.team.map((person) => `<li>${person}</li>`).join()}
                            </ul>`: ''}
                            
                            ${(item.technologies.length > 0) ? 
                            `<ul class="list-inline item-details"><strong>Technologies :</strong>
                                ${item.technologies.map((techno) => `<li>${techno}</li>`).join()}
                            </ul>`: ''}
                            
                            <p><strong>Sources : <a href="${item.url}" class="portfolio-link">${item.url}</a></strong><br/>
                            <strong>Video : <a href="${item.videoURL}" class="portfolio-link">${item.videoURL}</a></strong></p>
                            
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
                            
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

const renderResumeElements = (data) => {
    return `<div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="resume-body">
                        <h3>Profile</h3>
                        <hr class="star-primary"/>
                        <p>${data.description}</p>
                        <br/>

                        <h3>Employment history</h3>
                        <hr class="star-primary"/>
                        <ul>
                            ${data.employment.map((job) => `<li>
                                <div class="container">
                                    <p><strong>${job.jobTitle}</strong> at <strong>${job.company}</strong><br/>
                                    In ${job.location} from ${job.from} to ${job.to}</p>
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
                                    from ${item.fromYear} to ${item.toYear}.
                                    </p>
                                </div>
                            </li>`).join('')}
                        </ul>

                        <h3>Technical Experience</h3>
                        <hr class="star-primary"/>
                        <ul class="list-inline">${data.technologies.map((techno) => `<li>${techno}</li>`).join(', ')}</ul>
                        <br/>

                        <h3>Languages</h3>
                        <hr class="star-primary"/>
                        <ul class="list-inline">${data.languages.map((lang) => `<li>${lang}</li>`).join()}</ul>
                    </div>
                </div>
            </div>
        </div>`;
}


const renderHiringInfoElement = (data) => {
    return `<div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="resume-body">
                        <h3>Interested In</h3>
                        <hr class="star-primary"/>
                        <ul class="list-inline">
                            ${data.interestedIn.map((interest) => `<li><p>${interest}</p></li>`).join()}
                        </ul><br/>

                        <h3>Contact/Social Media</h3>
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

const renderOOS = () => {
    let content = `<div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="resume-body">
                                <h1>Oops! It looks like something went wrong...</h1>
                                <p style="text-align: center;">Hopefully the service is back up shortly!</p>
                            </div>
                        </div>
                    </div>
                </div>`
    render(content, '#main-content');
}

const renderHeaderSection = (resumes) => {
    let content = `${resumes.map((resume) => renderHeaderElement(resume)).join('')}`;
    if(content != '')
        render(content, '#header-container');
    
    return resumes;
}

const renderAllModals = (itemList) => {
    let content = `${itemList.map((item, i) => renderModal(i+1, item)).join('')}`;
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
    let content = `${resumes.map((resume) => renderResumeElements(resume)).join('')}`;
    if(content != '')
        render(content, '#main-content');

    return resumes;
}

const renderHiringInfoPage = (resumes) => {
    let content = `${resumes.map((resume) => renderHiringInfoElement(resume)).join('')}`;
    if(content != '')
        render(content, '#main-content');

    return resumes;
}

//error handling on data fetch
const handleErrors = (response) => {
    if(!response.ok) {
        renderOOS();
        throw Error(`${response.status} : ${response.statusText}`);
    }
    return response;
}

const renderProjects = () => {
    fetch(`/${langSwitch}/projects`)
        .then((resp) => handleErrors(resp))
        .then((resp) => resp.json())
        .then((resp) => renderItemList(resp))
        .then((resp) => renderAllModals(resp))
        .catch((resp) => resp);
}

const renderResume = () => {
    fetch(`/${langSwitch}/resume`)
        .then((resp) => handleErrors(resp))
        .then((resp) => resp.json())
        .then((resp) => renderResumePage(resp))
        .catch((resp) => resp);
}

const renderHiringInfo = () => {
    fetch(`/${langSwitch}/resume`)
        .then((resp) => handleErrors(resp))
        .then((resp) => resp.json())
        .then((resp) => renderHiringInfoPage(resp))
        .catch((resp) => resp);
}

const dispatchAEvent = (href) => {
    console.log(href);
    if(href == `${document.URL}#portfolio`)
        renderProjects();
    else if(href == `${document.URL}#resume`)
        renderResume();
    else if(href == `${document.URL}#hiringInfo`)
        renderHiringInfo();
    appHistory.push(href);
}

// ########################################################

//click on A element
document.body.addEventListener('click', (event) => {
    let tag = event.target;
    if (tag.tagName == 'A' && tag.href && event.button == 0) {
        if (tag.origin == document.location.origin) {
            let oldPath = document.location.pathname;
            let newPath = tag.pathname;
            
            console.log(newPath);

            event.preventDefault();
            dispatchAEvent(tag.href);
        }
    }
});

fetch(`/${langSwitch}/resume`)
    .then((resp) => handleErrors(resp))
    .then((resp) => resp.json())
    .then((resp) => renderHeaderSection(resp))
    .catch((resp) => resp);

dispatchAEvent(`${document.URL}#portfolio`);
});