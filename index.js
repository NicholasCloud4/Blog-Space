/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
        const postArray = data.slice(0, 5);
        let html = "";
        for (let post of postArray) {
            html += `<h1>${post.title}</h1>
            <p>${post.body}</p>
            <hr />`;
        }
        document.getElementById("blog-list").innerHTML = html;
    })