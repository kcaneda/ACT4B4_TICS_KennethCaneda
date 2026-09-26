const contenedor = document.getElementById("contenedor");
const obtenerPersonajes = async () => {
    try {
        contenedor.innerHTML='';
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const datos = await respuesta.json();
        for (const personaje of datos.results) {
            const tarjeta = `
        <div class="card">
            <img src= "${personaje.image}">
            <h2>${personaje.name}</h2>
            <p>Especie: ${personaje.species}</p>
            <p>Género: ${personaje.gender}</p>
            <p>Lugar de Origen: ${personaje.origin.name}</p>
        </div>`
            contenedor.innerHTML += tarjeta;
        }
    } catch (error) {
        contenedor.innerHTML = `
            <div class="error-card">
                <h2>Error</h2>
                <p>No pudimos conectar con el servidor de productos. Por favor, verifica tu conexión a internet o verifica la dirección URL.</p>
            </div>
        `
        throw new Error("No se pudo acceder al recurso");
    }
}
obtenerPersonajes();

const obtenerPersonajePorNombre = async () => {
    const filtro = document.getElementById("busqueda").value;
    try {
        if(filtro.trim() === ''){
            return obtenerPersonajes();
        }
        contenedor.innerHTML='';
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${filtro}`)
        if (respuesta.ok) {
            const datos = await respuesta.json();
            for (const personaje of datos.results) {
                const tarjeta = `
                    <div class="card">
                        <img src= "${personaje.image}">
                        <h2>${personaje.name}</h2>
                        <p>Especie: ${personaje.species}</p>
                        <p>Género: ${personaje.gender}</p>
                        <p>Lugar de Origen: ${personaje.origin.name}</p>
                     </div>`
                contenedor.innerHTML += tarjeta;
            }
        } else {
            contenedor.innerHTML = `
            <div class="error-card">
                <h2>404 No encontrado</h2>
                <p>No se encontraron resultados para esta búsqueda.</p>
            </div>`
        }
    } catch (error) {
        contenedor.innerHTML = `
            <div class="error-card">
                <h2>Error</h2>
                <p>No pudimos conectar con el servidor de productos. Por favor, verifica tu conexión a internet o verifica la dirección URL.</p>
            </div>
        `
        throw new Error("No se pudo acceder al recurso", {cause: error});

    }
}
const boton = document.getElementById("boton")
boton.addEventListener("click", obtenerPersonajePorNombre)