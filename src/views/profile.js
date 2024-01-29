import { getAllMemes } from "../api/meme.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";
import {PreviewMemes} from './comman.js'

const profileTemplate = (memes) => html`
<section id="user-profile-page" class="user-profile">
<article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
    <div class="user-content">
        <p>Username: Mary</p>
        <p>Email: mary@abv.bg</p>
        <p>My memes count: 2</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">
    ${
        memes.length == 0 ? html `<p class="no-memes">No memes in database.</p>`
        : html `<div id="memes">${memes.map(PreviewUserMemes)}`
    }

</div>
</section>`

export function profileView(ctx){
    const gender = ctx.params.gender

    const memes = getAllMemes


    ctx.render(profileTemplate())
}