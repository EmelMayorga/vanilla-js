import {GetUsers} from "../servicios/getUsers";


promesaCumplida()
    async function promesaCumplida() {
        let inforuser = GetUsers()

console.log(inforuser);

}

const hora = document.getElementById("hora")

setInterval(() => {
    console.log("Mensaje cada 5 segs")
}, 5000);