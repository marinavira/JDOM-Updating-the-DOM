import "./styles.css";

/**
  Write the addheadings() function here
*/


function addHeadings(){
 
  const articles = document.querySelectorAll('section.articles > article')
  for (let element of articles){
    element.innerHTML = `<h2>${element.innerHTML}</h2>`
  }
}
                   
/**
  Write the styleTutorialsAndArticles() function here
*/

function styleTutorialsAndArticles(){
 const articles = document.querySelectorAll('article')
  articles.forEach((article) => {
    const articleText = article.textContent.toLowerCase();
    const className = articleText.includes('tutorial')? 'tutorial':'article';
    article.classList.add(className)
  }
                  )}


/**
  Write the separateAllTutorials() function here
*/

function separateAllTutorials(){
   const articlesSection = document.querySelector('.articles');
  const articles = articlesSection.querySelectorAll('article');

  // Create a new section element for tutorials
  const tutorialsSection = document.createElement('section');
  tutorialsSection.classList.add('tutorials');

  // Loop through the articles and move tutorials to the new section
  articles.forEach(article => {
    if (article.textContent.includes('Tutorial')) {
      tutorialsSection.appendChild(article);
    }
  });

  // Append the tutorials section to the container if it contains tutorials
  if (tutorialsSection.children.length > 0) {
    const container = document.querySelector('.container');
    container.appendChild(tutorialsSection);
  }
}


/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
