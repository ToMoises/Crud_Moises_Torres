console.log("entrooooo");



const Entrada = document.getElementById("entrada");
const Segundo = document.getElementById("segundo");
const Bebida = document.getElementById("bebida");
const Postre = document.getElementById("postre");
const Precio = document.getElementById("precio");


function crear(){
    let menu = { 
        Entrada,
        Segundo,
        Bebida,
        Postre,
        Precio
    }

    if (localStorage.getItem("menus") === null) {
        let menus =[]
        menus.push(menu)
        localStorage.setItem("menus",JSON.stringify(menus))
    } else{
        let menus = localStorage.getItem(JSON.parse("menus"))
        menus.push(menu)
        localStorage.setItem("menus",JSON.stringify(menus))
    }

    
        
}

