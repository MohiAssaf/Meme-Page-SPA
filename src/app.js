import {render, page} from './lib.js'
import { homeView } from './views/home.js';


const main = document.querySelector('main') // where the views should be displayed

page(decorateContext); // this func will always be executed on all routes
page('/', homeView);
page('/memes', ()=> console.log('memes'));
page('/memes/:id', ()=> console.log('meme detail'));
page('/edit/:id', ()=> console.log('edit'));
page('/create', ()=> console.log('create meme'));
page('/profile', ()=> console.log('profile'));
page('/login', ()=> console.log('login'));
page('/register', ()=> console.log('registe'));



page.start(); // starting the application

function decorateContext(ctx, next){ // instead od adding the view in the main in each one of the templates
    ctx.render = renderMain;

    next();
}


function renderMain(templateResult){
    render(templateResult, main)
}