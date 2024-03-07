import {html} from '../lib.js'
import { getUserData } from '../util.js'

const homeTemplate = () => html`
<section id="welcome">

<div class="welcome-container">
    <h1>Welcome To Meme Lounge</h1>
    <img src="/images/back.jpg" alt="meme">
    <h2>Login to see our memes right away!</h2>

    <div class="button-div">
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