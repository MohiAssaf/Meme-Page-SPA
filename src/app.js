import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { allMemesView } from './views/allmemes.js';
import { createView } from './views/createMeme.js';
import { detailsView } from './views/detailsMeme.js';
import { editMemeView } from './views/editMeme.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';
import { logout } from './api/users.js';


const main = document.querySelector('main') // where the views should be displayed
document.getElementById('logoutBtn').addEventListener('click', logOut)

page(decorateContext); // this func will always be executed on all routes
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/memes', allMemesView);
page('/memes/:id', detailsView);
page('/edit/:id', editMemeView);
page('/create', createView);
page('/profile', profileView);


updateNavigation();
page.start(); // starting the application

function decorateContext(ctx, next) { // instead od adding the view in the main in each one of the templates
    ctx.render = renderMain;
    ctx.updateNavigation = updateNavigation;
    next();
}


function renderMain(templateResult) {
    render(templateResult, main)
}


function updateNavigation(){ // func that updates the nav based on if its a user logged in or a guest
    const userData = getUserData()
    if(userData){
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcom,  ${userData.username}`
    }else{
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}


async function logOut() { /// logout a user when clicking on the logoutbtn
    
    try {
        await logout();
        updateNavigation();
        page.redirect('/');
    } catch (error) {
        console.error('Logout error:', error);
    }
}