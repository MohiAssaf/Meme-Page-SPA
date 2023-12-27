import {render, page} from './lib.js'


page('/', ()=> console.log('home'));
page('/memes', ()=> console.log('memes'));
page('/memes/:id', ()=> console.log('meme detail'));
page('/edit/:id', ()=> console.log('edit'));
page('/create', ()=> console.log('create meme'));
page('/profile', ()=> console.log('profile'));
page('/login', ()=> console.log('login'));
page('/register', ()=> console.log('registe'));



page.start(); // starting the application