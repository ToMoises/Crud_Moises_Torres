console.log("entrooooo");

const _tbl_menus = document.getElementById("tbl_Menu");
const _Entrada = document.getElementById("entrada");
const _Segundo = document.getElementById("segundo");
const _Bebida = document.getElementById("bebida");
const _Postre = document.getElementById("postre");
const _Precio = document.getElementById("precio");
//getItem para obtener algo del storage
//Si encuentras el dato de menus en el locastorage que solo guarda strings en formato JSON
// convertir JSON a javascript con json parse para que se convierta en un array
//y si no hay que lo deje vacio []
let menus = localStorage.getItem("menus") ? JSON.parse(localStorage.getItem("menus")) : [];
let editando = false;
let menu_previo = "";

function crear() {
    const Entrada = _Entrada.value;
    const Segundo = _Segundo.value;
    const Bebida = _Bebida.value;
    const Postre = _Postre.value;
    const Precio = _Precio.value;

    let menu = {
        Entrada,
        Segundo,
        Bebida,
        Postre,
        Precio
    }
    console.log("entro");
   // let menus = JSON.parse(localStorage.getItem("menus"));
    menus.push(menu);
    localStorage.setItem("menus", JSON.stringify(menus));
    Entrada = "";
    Segundo= "";
    Bebida= "";
    Postre= "";
    Precio= "";
    actualizar();
}


function actualizar(){
    const tbl_menus= _tbl_menus ;
    tbl_menus.innerHTML="";
    for (let i = 0; i < menus.length; i++) {
        let Entrada = menus[i].Entrada
        let Segundo = menus[i].Segundo
        let Bebida = menus[i].Bebida
        let Postre = menus[i].Postre
        let Precio = menus[i].Precio
        
        tbl_menus.innerHTML +=
        `
        <tr class="text-center">
          <td>${Entrada}</td>
          <td>${Segundo}</td>
          <td>${Bebida}</td>
          <td>${Postre}</td>
          <td>${Precio}</td>
          <td>
            <button onclick ="eliminar()" class="btn btn-warning" type="button">Editar</button>
            <button onclick ="editar()" class="btn btn-danger" type="button">Eliminar</button>
          </td>
        </tr>
        
        ` ;
    }
}

(()=>{
    actualizar();
})()