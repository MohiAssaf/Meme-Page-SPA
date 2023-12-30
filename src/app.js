import { render, page } from './lib.js';
import { allMemesView } from './views/allmemes.js';
import { createView } from './views/createMeme.js';
import { detailsView } from './views/detailsMeme.js';
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
page('/memes', allMemesView);
page('/memes/:id', () => detailsView);
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