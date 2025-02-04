import {posts} from "/data.js"

const heart = "/images/icon-heart.png"
const comment = "/images/icon-comment.png"
const dm = "/images/icon-dm.png"

function getPostHtml() {
    let postHtml = ""
    for (let post of posts) {
        postHtml +=
        `<div class="border-t post-header flex-post-header">
            <div>
                <img class="avatar-img" src="${post.avatar}" alt="Avatar icon ${post.name}.">
            </div>
            <div>
                <h2 class="mb0">${post.name}</h2>
                <p class="mt0">${post.location}</p>
            </div>
        </div>
        <img class="portrait-img" src="${post.post}" alt="A portrait of ${post.name}.">
    
        <div class="icons">
            <div class="flex-icons">
                <img class="icons-img" src="${heart}">
                <img class="icons-img" src="${comment}">
                <img class="icons-img" src="${dm}">
            </div>
            <h2 class="mt0 padding-l">${post.likes} likes</h2>
            <p class="padding-l"><span class="username">${post.username}</span> ${post.comment}</p>
        </div> `
    }
    return postHtml
}

function render() {
    document.querySelector("#post-section").innerHTML = getPostHtml()
}

render()
