// For this example, let's consider a gallery of images where each image has an associarted data attribute called 'data-author' that stores the author's name. You want to filter the images by author

// Get all the images

const imagesEL = document
    .getElementById("imageGallery")
    .querySelectorAll("img");

    // console.log(imagesEL);


// Create an array to store images by Alice

let imagesByAlice = [];

// Use getAttribute to filter images by author Alice
imagesEL.forEach((img) => {
    // console.log(img);
    const author = img.getAttribute("data-author");
    console.log(author);
    if(author === "Alice"){
        imagesByAlice.push(img);
    }
});

imagesByAlice.forEach((img) => console.log(img));


// Hide images that are not by Alice
imagesEL.forEach((img) => {
    if(!imagesByAlice.includes(img)){
        img.style.display = "none";
    }
})