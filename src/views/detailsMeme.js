import { deleteMeme, detailsMeme } from "../api/meme.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (meme, isCreator, onDelete) => html`
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
            <button @click=${onDelete} class="button danger">Delete</button>`
            : ''
         }
        
    </div>
</div>
</section>`

export async function detailsView(ctx){
    const meme = await detailsMeme(ctx.params.id)
    const user = getUserData();

    const isCreator = user?.id == meme._ownerId // checks if its owner or not if there is userData
    
    ctx.render(detailsTemplate(meme, isCreator, onDelete))

    async function onDelete(){
        const alertBeforeDel = confirm('Are you sure you want to delete this Meme??')

        if(alertBeforeDel){
            await deleteMeme(ctx.params.id)
            ctx.page.redirect('/memes')
        }


    }
}