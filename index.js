

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
        .then((post) => console.log(post))
    /**
         * Challenge: Update the DOM with the new blog entry
         */

    document.getElementById("blog-list").insertAdjacentHTML('afterbegin',
        `<h1>${post.title}</h1>
        <p>${post.body}</p>
        <hr />
        `);
})
