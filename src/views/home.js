import {html} from '../lib.js'
import { getUserData } from '../util.js'

const homeTemplate = () => html`
<section id="welcome">
<div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
</div>

<div class="welcome-container">
    <h1>Welcome to Meme Lounge</h1>
    <img src="https://gifdb.com/images/high/hasbulla-relax-resting-chair-hello-arm-raise-iakob9dpl9at1x0n.gif" alt="Welcome Image">
    <h2>Loging to see more memes</h2>
    <div class="button-container">
        <a href="/login" class="button login-button">Login</a>
        <a href="/register" class="button register-button">Register</a>
    </div>
</div>
</section>`


export function homeView(ctx){
    if(getUserData()){
        ctx.page.redirect('/memes')
    }else{
        ctx.render(homeTemplate())
    }
}