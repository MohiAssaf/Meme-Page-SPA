import { html } from "../lib.js";
import {PreviewMemes} from './comman.js'
import { getAllMemes } from '../api/data.js'

let AllMemesTemplate = (memes) => html `
        <section id="meme-feed">
            <h1>All Memes</h1>
            ${
                memes.length == 0 ? html `<p class="no-memes">No memes in database.</p>`:
                html `<div id="memes">${memes.map(PreviewMemes)}`
             }
        </section>`

export async function allMemesView(ctx){
    let allmemes = await getAllMemes();


    ctx.render(AllMemesTemplate(allmemes))
}