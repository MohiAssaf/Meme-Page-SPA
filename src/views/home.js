import {html} from '../lib.js'
import { getUserData } from '../util.js'

const homeTemplate = () => html`
<section id="welcome">

<div class="container">
    <h1>Welcome to Our Awesome Website!</h1>
    <img src="/images/back.jpg" alt="Welcome Image">
    <div class="button-container">
        <a href="login.html" class="button login-button">Login</a>
        <a href="register.html" class="button register-button">Register</a>
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