import { render, page } from './lib.js'
import { allMems } from './views/allmemes.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';


const main = document.querySelector('main') // where the views should be displayed

page(decorateContext); // this func will always be executed on all routes
page('/', homeView);
page('/login', loginView);
page('/register', () => console.log('registe'));
page('/memes', allMems);
page('/memes/:id', () => console.log('meme detail'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create meme'));
page('/profile', () => console.log('profile'));



page.start(); // starting the application

function decorateContext(ctx, next) { // instead od adding the view in the main in each one of the templates
    ctx.render = renderMain;

    next();
}


function renderMain(templateResult) {
    render(templateResult, main)
}