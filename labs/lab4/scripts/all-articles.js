// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions

function initializeSearch(newParentElement) {
  console.log("InitializeSearch function was executed")
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}


function hideArticles() {
  console.log("hideArticles function was executed")
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }

  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
// Select all articles

// Iterate over the NodeList using a for loop
for(const article of document.querySelectorAll("article")){
  if(!articlesWithTags.includes(article)){
    article.classList.add("hidden")
  }else{
    article.classList.remove("hidden")
  }
}
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */

  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  
  
  function createTag(text) {
    console.log("createTag function was executed")
    const button = document.createElement("button");
    button.classList.add("tag");
    button.textContent = text;
  

  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener("click",remove)
  return button
}


function findArticlesWithTag(phrase) {
  console.log("findArticlesWithTag function was executed")
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}


function addSearchTerm(text) {
  console.log("AddSearchTerm function was executed")
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers

function onSearch(event) {
  console.log("OnSearch function was executed")
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if(event.key==="Enter"){
    addSearchTerm(input.value)
    input.value="";
  }
  //event is anything user do on the keyboard or mouse.
}

// Main function

function main() {
  console.log("Main function was executed")
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event: Main-->InitializeSearch-->OnSearch-->AddSearchTerm-->createTag-->hideArticles-->findArticlesWithTag-->hideArticles
 * Pressing Enter: OnSearch function was executed. AddSearchTerm function was executed. createTag function was executed. hideArticles function was executed. findArticlesWithTag function was executed.
 * Clicking to Remove a Tag: hideArticles function was executed.
 * Loading the Page: Main function was executed. InitializeSearch function was executed.
 */