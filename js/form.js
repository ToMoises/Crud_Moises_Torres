console.log("entrooooo");

const _tbl_menus = document.getElementById("tbl_Menu");
const _body = document.getElementById("body");
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


function crear() {
    var Entrada = _Entrada.value;
    var Segundo = _Segundo.value;
    var Bebida = _Bebida.value;
    var Postre = _Postre.value;
    var Precio = _Precio.value;
    // validacion solo letras o solo numeros
    let menu = {
        Entrada,
        Segundo,
        Bebida,
        Postre,
        Precio
    }
    
    menus.push(menu);
    localStorage.setItem("menus", JSON.stringify(menus));
    limpiar()
    mostrar();
}


function mostrar() {
  if(menus.length === 0){
    const tbl_menus = _tbl_menus;
    tbl_menus.innerHTML = 
    `
    <tr class="text-center">
          <td class="font-weight-bold" colspan="6">No hay registros de menus</td>
        </tr>
    
    `;

    
  }else{
    const tbl_menus = _tbl_menus;
    tbl_menus.innerHTML = "";

    // si no hay datos que me muestre no hay datos y si hay que si muestre
    menus.forEach(m => {
        let Entrada = m.Entrada
        let Segundo = m.Segundo
        let Bebida = m.Bebida
        let Postre = m.Postre
        let Precio = m.Precio

        tbl_menus.innerHTML +=
            `
        <tr class="text-center">
          <td>${Entrada}</td>
          <td>${Segundo}</td>
          <td>${Bebida}</td>
          <td>${Postre}</td>
          <td>${Precio}</td>
          <td>
            <button onclick ="editar('${Entrada}')" class="btn btn-warning" type="button">Editar</button>
            <button onclick ="eliminar('${Entrada}')" class="btn btn-danger" type="button">Eliminar</button>
          </td>
        </tr>
        
        ` ;
    });
  }
    

    /*
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
                <button onclick ="editar('${Entrada}')" class="btn btn-warning" type="button">Editar</button>
                <button onclick ="eliminar('${Entrada}')" class="btn btn-danger" type="button">Eliminar</button>
              </td>
            </tr>
            
            ` ;
        }
    */

}

function editar(Entrada) {
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].Entrada === Entrada) {
            const body = _body;
            body.innerHTML =
                `
        <div class="row d-flex justify-content-center ">
        <div class=" input-group col-12 col-sm-9 col-md-7 mt-1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-cutlery" aria-hidden="true"></i></span>
          </div>
          <input type="text" class="form-control" value="${menus[i].Entrada}" id="new_entrada">
        </div>

        <div class=" input-group col-12 col-sm-9 col-md-7 mt-1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-cutlery" aria-hidden="true"></i></span>
          </div>
          <input type="text" class="form-control" value="${menus[i].Segundo}" id="new_segundo">
        </div>
        <div class=" input-group col-12 col-sm-9 col-md-7 mt-1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-birthday-cake"
                aria-hidden="true"></i></span>
          </div>
          <input type="text" class="form-control" value="${menus[i].Postre}" id="new_postre">
        </div>
        <div class="  input-group col-12 col-sm-9 col-md-7 mt-1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-glass" aria-hidden="true"></i></span>
          </div>
          <input type="text" class="form-control" value="${menus[i].Bebida}" id="new_bebida">
        </div>

        <div class="  input-group col-12 col-sm-9 col-md-7 mt-1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-money" aria-hidden="true"></i></span>
          </div>
          <input type="text" class="form-control" value="${menus[i].Precio}" id="new_precio">
        </div>

        <div class=" input-group col-12 col-sm-9 col-md-7 mt-4">
          <button class="btn btn-primary btn-block" type="button" onclick="actualizar('${i}')">Actualizar</button>
          <button class="btn btn-danger btn-block" type="button">Cancelar</button>
        </div>
      </div>
        `
        }

    }
}


function actualizar(i) {
    menus[i].Entrada = document.getElementById("new_entrada").value;
    menus[i].Segundo = document.getElementById("new_segundo").value;
    menus[i].Bebida = document.getElementById("new_bebida").value;
    menus[i].Postre = document.getElementById("new_postre").value;
    menus[i].Precio = document.getElementById("new_precio").value;
    localStorage.setItem("menus", JSON.stringify(menus));
    limpiar();
    mostrar();
    location. reload();
}


function eliminar(Entrada) {
    for (let i = 0; i < menus.length; i++) {
        if(menus[i].Entrada === Entrada){
            menus.splice(i,1);
        }
    }
    localStorage.setItem("menus", JSON.stringify(menus));
    mostrar();
}


function limpiar(){
  _Entrada.value = "";
    _Segundo.value = "";
    _Bebida.value = "";
    _Postre.value = "";
    _Precio.value = "";
}

(() => {
    mostrar();
})()