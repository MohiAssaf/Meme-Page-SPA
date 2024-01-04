import { logout } from "../api/users.js"
import { page } from "../lib.js"

const logoutBtn = document.getElementById('logoutButn')


logoutBtn.addEventListener("click", () =>{
    console.log(';ofkaks')
    logout()
    updateNavigation()
    page.redirect('/')
}) 