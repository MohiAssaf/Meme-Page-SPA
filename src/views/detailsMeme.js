import { detailsMeme } from "../api/meme.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (meme, isCreator) => html`
<section id="meme-details">
<h1>Meme Title: ${meme.title} </h1>
<div class="meme-details">
    <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl}>
    </div>
    <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        ${// if its the cretor show the two buttons else dont
            isCreator ? html `        
            <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button class="button danger">Delete</button>`
            : ''
         }
        
    </div>
</div>
</section>`

export async function detailsView(ctx){
    const meme = await detailsMeme(ctx.params.id)
    const user = getUserData();

    const isCreator = user?.id == meme._ownerId // checks if its owner or not
    
    ctx.render(detailsTemplate(meme, isCreator))
}