
let postsArray = []

function renderPosts(array) {
    let html = "";
    for (let post of array) {
        html += `<h1>${post.title}</h1>
        <p>${post.body}</p>
        <hr />`;
    }
    document.getElementById("blog-list").innerHTML = html;

}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
        postsArray = data.slice(0, 5);
        renderPosts(postsArray);
    })


document.getElementById("new-post").addEventListener("submit", (event) => {
    event.preventDefault();
    const postTitle = document.getElementById("post-title").value;
    const postBody = document.getElementById("post-body").value;
    const post = { title: postTitle, body: postBody };
    // console.log(post);

    fetch("https://apis.scrimba.com/jsonplaceholder/posts",
        {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((post) => {
            console.log(post)

            /**
             * Challenge: Use our new renderPosts function to clean up this code.
             * 
             * Don't forget to update the postsArray variable first!
             */
            postsArray.unshift(post);
            renderPosts(postsArray);
        })
})
