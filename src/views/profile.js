import { userMemes } from "../api/meme.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";
import {PreviewUserMemes} from './comman.js'

const profileTemplate = (memes, user) => html`
<section id="user-profile-page" class="user-profile">
<article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender == 'Female' ? 'female.png' : 'male.png'}">
    <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${memes.length}</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">
    ${
        memes.length == 0 ? html `<p class="no-memes">No memes in database.</p>`
        : memes.map(PreviewUserMemes)
    }

</div>
</section>`


export async function profileView(ctx){
    const user = getUserData();
    const memes = await userMemes(user.id);


    ctx.render(profileTemplate(memes, user))
}