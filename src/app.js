import { render, page } from './lib.js'
import { allMems } from './views/allMemes.js';
import { createView } from './views/createMeme.js';
import { editMemeView } from './views/editmeme.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';


const main = document.querySelector('main') // where the views should be displayed

page(decorateContext); // this func will always be executed on all routes
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/memes', allMems);
page('/memes/:id', () => console.log('meme detail'));
page('/edit/:id', editMemeView);
page('/create', createView);
page('/profile', profileView);



page.start(); // starting the application

function decorateContext(ctx, next) { // instead od adding the view in the main in each one of the templates
    ctx.render = renderMain;

    next();
}


function renderMain(templateResult) {
    render(templateResult, main)
}