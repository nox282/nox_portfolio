document.addEventListener('DOMContentLoaded', () => {

let langSwitch = 'en';

// FRAMEWORK FUNCTIONS ####################################

const checkClassName = (className) => {
      if(className.charAt(0) != '.') return '.' + className;
      else return className;
}

const render = (content, className) => {
      let element = document.querySelector(checkClassName(className));
      if(element)
            element.innerHTML = content;
}

const renderItem = (imgURL, title, href) => {
      return `<div class="col-sm-4 portfolio-item">
                  <a href="#${href}" class="portfolio-link" data-toggle="modal">
                      <div class="caption">
                          <div class="caption-content">
                              <i class="fa fa-search-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="${imgURL}" class="img-responsive" alt="">
                  </a>
            </div>`;
}

const renderItemList = (itemList) => {
      let content = '';
      for(let i = 0; i < itemList.length; i++)
            content += renderItem(itemList[i].imageURL, itemList[i].title, itemList[i].title);
      if(content != '')
            render(content, 'portfolio-item-list');
}

 //error handling on data fetch
    const handleErrors = (response) => {
        if(!response.ok && Response.status != 500) {
            response.text().then(text => {
                injectError(text);
                return text;
            });
            throw Error(`${response.status} : ${response.statusText}`);
        }
        else if(response.status == 500){
            injectError(response.statusText);
            throw Error(`${response.status} : ${response.statusText}`);
        }
        return response;
    };

const fetchProjects = () => {
      fetch(`/${langSwitch}/projects`)
            .then((resp) => handleErrors(resp))
            .then((resp) => resp.json())
            .then((resp) => renderItemList(resp))
            .catch((resp) => resp);
}

// ########################################################


fetchProjects();

});