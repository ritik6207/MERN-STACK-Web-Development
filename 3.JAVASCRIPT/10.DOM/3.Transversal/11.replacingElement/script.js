// Function to replace an article

function replaceArticle(articleId, newContent) {
    // Find the existing article element by its Id
    const existingArticle = document.getElementById(articleId);

    // Create a new div element for the updated article
    const newArticle = document.createElement("div");

    // add css to it
    newArticle.className = "article";

    // Keep the ID same for the new article
    newArticle.id = articleId;

    // Create a text node for the new Content
    const newTextNode = document.createTextNode(newContent);

    // Append the text node to the new article div
    newArticle.appendChild(newTextNode);

    // Replace the existing article with the new one
    existingArticle.parentNode.replaceChild(newArticle, existingArticle);
};

replaceArticle('article1', 'some content')
replaceArticle('article2', 'some content 2')