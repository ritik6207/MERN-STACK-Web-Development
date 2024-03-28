const url = "https://jsonplaceholder.typicode.com/posts";

// Create a new instance of XMLHttpRequest

const xhr = new XMLHttpRequest();

// Configure the request
xhr.open("GET", url, true);

// Attach an event listener to handle changes in the request state
xhr.onreadystatechange = function () {
  // Check if the request is completed (readyState 4) and successful (status 200)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // parse the json data
    console.log(JSON.parse(xhr.responseText));
  }
  //Handle errors
  if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.statusText);
  }
};

// Send the request
// xhr.send();

//! Using Promise Based
const fetchData = () => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    }).catch(error => console.log(error))
};

// fetchData();



//! Using async await
const fetchData2 = async () => {
    try {
        const result = await fetch(url)
        // console.log(result);
        return result.json();
    } catch (error) {
        console.log(error);
    }
}

fetchData2().then((res) => {
    console.log(res);
})