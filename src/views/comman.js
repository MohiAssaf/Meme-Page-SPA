import { html } from '../lib.js'


export const PreviewMemes = (meme) => html`
<div class="meme">
<div class="card">
    <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
    </div>
    <div id="data-buttons">
        <a class="button" href="/memes/${meme._id}">Details</a>
    </div>
</div>
</div>`

export const PreviewUserMemes = (meme) => html `
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img src=${meme.imageUrl} alt="meme-img" class="userProfileImage">
        <a href="/memes/${meme._id}" class="button">Details</a>
    </div>
    `
