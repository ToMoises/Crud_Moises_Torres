const Nombre_Apellido = document.getElementById("nom_ape");
const lista = document.getElementById("lista");
//aca guardamos los nombres
let nombres= localStorage.getItem("nombres") ? JSON.parse(localStorage.getItem("nombres")) : [];
let editando = false;
let nombre_previo = ""; 


function Crear() {
if (editando) {
    //el nom_previo lo voy a empezar a buscar
    console.log(nombre_previo);
    //Ejm Jose == quiero cambiar jose por jesus 
    //si jose = jesus si no es igual(no se hace nada) pero si es igual se le dara ese valor
    nombres = nombres.map(individual => individual === nombre_previo ? Nombre_Apellido.value : individual)
    //seteo los nombres en el local storage 
    localStorage.setItem("nombres",JSON.stringify(nombres));
    Nombre_Apellido.value="";
    Actualizar();
    editando = false;
}else{
    const nombre = Nombre_Apellido.value;
    console.log(nombre);
    //creamos una array y con push se agrega lo que insertamos en variable nombre
    nombres.push(nombre);
    console.log(nombres);
    //guardamos en el storage => convierte un valor de javascript en json
    //
    localStorage.setItem("nombres",JSON.stringify(nombres))
    console.log(localStorage.getItem("nombres"),"holaaaa");
    //limpiamos el input
    Nombre_Apellido.value = "";
    Actualizar();
    Nombre_Apellido.focus();

}


}
function Actualizar() {
    lista.innerHTML = "";
    console.log("Ingreso a actualizar");
    //nombres es el arreglo de nombres para leer los nombres va a iterar cada nombre
    nombres.forEach(nombre => {
        //crear elementos para el html 
        const li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("list-group-item");

        const btnEliminar = document.createElement("btnEliminar")
        const iconoBasura = document.createElement("i");
        iconoBasura.classList.add("fa", "fa-trash");
        btnEliminar.appendChild(iconoBasura);

        btnEliminar.classList.add("btn", "btn-danger", "float-right");
        btnEliminar.addEventListener("click", () => deleteIndividual(nombre));
        // btnEliminar.setAttribute("title", "Eliminar");
        // btnEliminar.textContent = "Eliminar";
        li.appendChild(btnEliminar);


        const btnedit = document.createElement("button");
        btnedit.classList.add("btn", "btn-warning", "float-right", "mr-2");

        const iconoEdit = document.createElement("i");
        iconoEdit.classList.add("fa", "fa-edit");
        btnedit.appendChild(iconoEdit);

        btnedit.addEventListener("click", () => editar(nombre));
        li.appendChild(btnedit);

        lista.appendChild(li);
    });
}

function Limpiar() {
    console.log("Ingreso limpiar");
    localStorage.clear();
    nombres = [];
    console.log(nombres);
    Actualizar();
}

function editar(nombre){
    // estado editando es true 
 editando = true ;
 //seteo el nombre que le llega como parametro y lo guarda en nom_previo
 nombre_previo = nombre;
 //muestro en el input el nombre que seleccione
 Nombre_Apellido.value = nombre;
}

function deleteIndividual(nombre){
    console.log(nombre);
    const index = nombres.indexOf(nombre);
    nombres.splice(index,1);
 //   nombres = nombres.filter(n => n !== nombre);
    localStorage.setItem("nombres", JSON.stringify(nombres));
    Actualizar();
}

(()=>{
    Actualizar();
})()
