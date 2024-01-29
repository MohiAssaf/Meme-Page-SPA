import { detailsMeme, updateMeme } from "../api/meme.js";
import { html } from "../lib.js";

const editMemeTemplate = (meme, onSubmit) => html`
<section id="edit-meme">
<form @submit=${onSubmit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}></textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>`

export async function editMemeView(ctx){
    const meme = await detailsMeme(ctx.params.id)
    ctx.render(editMemeTemplate(meme, onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const memeId = ctx.params.id

        const meme = {
            title: formData.get('title'),
            description: formData.get('description'),
            image: formData.get('imageUrl'),

        }

        if(meme.title == '' || meme.description == '' || meme.image == ''){ // check if all fields are filled
            return alert('All fields are requried !!!!')
        }

        await updateMeme(memeId, meme)
        e.target.reset(); // reset all fields
        ctx.page.redirect(`/memes/${memeId}`) // redirect after creation

    }

}