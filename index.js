

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
        .then((data) => console.log(data))
})

/**
     * Challenge: Send this off to the server!
     * 
     * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
     * 2. Endpoint: /posts
     * 3. method: ???
     * 4. Request body: ??? (Remember to turn it into JSON)
     * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
     */
