//======= CONSTANTES DE HTML =========

//MENU HAMBURGUESA
const todo = document.getElementById("todo");
const bar = document.getElementById("check");
const nav = document.getElementById("nav");

//CONTENEDORES DE SLIDER
const contenedorCelulares = document.getElementById("slider-celulares");
const contenedorTabletas = document.getElementById("slider-tabletas");
const contenedorAccesorios = document.getElementById("slider-accesorios");

//BUSQUEDA
const buscador = document.getElementById("buscador");
const botonBuscar = document.getElementById("boton-buscar");

//FILTRO
const filtro = document.getElementById("filtrar-icon");
const divFiltro = document.getElementById("div-filtro-parametros");
const botonFiltrar = document.getElementById("boton-filtrar-contenido");

const inputPrecio1 = document.getElementById("min-precio-input");
const inputPrecio2 = document.getElementById("max-precio-input");

const inputRangeRam = document.getElementById("input-rango-ram");
const inputRangeRom = document.getElementById("input-rango-rom");
const inputRangeMpx = document.getElementById("input-rango-mpx");

const inputRange = document.querySelectorAll(".inputs-rango-filtro");
const arrayIR = Array.from(inputRange);
const palabraInputGuia = document.querySelectorAll(".palabra-filtro-guia");
const arrayPIG = Array.from(palabraInputGuia);

const divFiltrado = document.getElementById("div-filtrado");
const divReFil = document.getElementById("div-resultado-filtrado");
const contenedorObjetos = document.getElementById("contenido-objetos-inicio");
const tituloFiltrados = document.getElementById("titulo-filtrados");

const botonRegFil = document.getElementById("boton-regresar-filtrado");

//CATALOGO

const divObjetosCatalogo = document.getElementById(
  "contenido-objetos-catalogo"
);
const asideCatalogo = document.getElementById("aside-catalogo");
const tituloCatalogo = document.querySelector(".titulo-contenido-catalogo-01");
const divFiltroCatalogo = document.getElementById("div-filtro-catalogo");
const divFilCat = document.getElementById("div-filcat");
const tituloFilCat = document.getElementById("titulo-filcat");

const divsCatalogo = document.querySelectorAll(".divs-catalogo");
const arrayDC = Array.from(divsCatalogo);

const botonRegCat = document.getElementById("boton-regresar-catalogo");

//CARRITO
const btnCarrito = document.getElementById("carrito-icon");
const iconCerrarCarrito = document.getElementById("icon-cerrar-carrito");

const divCarrito = document.getElementById("div-carrito");
const divLisArt = document.getElementById("div-articulos-carrito");
const precioTotalCarrito = document.getElementById("precio-carrito");
const botonEliminarTodoCarrito = document.getElementById(
  "boton-borrar-todo-carrito"
);
const botonComprarCarrito = document.getElementById('boton-comprar-carrito');

//NAV TAB
const target = document.querySelectorAll("[data-target]");
const content = document.querySelectorAll("[data-content]");
target.forEach((target) => {
  target.addEventListener("click", () => {
    content.forEach((c) => {
      c.classList.remove("active");
      nav.style = "right: -200%";
    });

    const t = document.querySelector(target.dataset.target);
    t.classList.add("active");
  });
});

//VARIABLES
let sliderWidth;
let windowWidth = window.innerWidth;
let widthArtFiltrado;
let widthArtFiltros;
if (windowWidth <= 650 && windowWidth >= 321) {
  widthArtFiltrado = "50%";
  widthArtFiltros = "45%";
} else if (windowWidth <= 320) {
  widthArtFiltrado = "100%";
  widthArtFiltros = "100%";
} else {
  widthArtFiltrado = "25%";
  widthArtFiltros = "25%";
}

//ARRAY DE OBJETOS
const dispositivos = [
  {
    nombre: "Samsung A50",
    descripcion: "4GB RAM - 64GB ROM - 25 MPX",
    precio: "9,499",
    imagen: "img/Samsung A50.jpg",
    id: "samsung-a50",
    categoria: "Celulares",
    marca: "samsung",
  },
  {
    nombre: "Huawei P30 Pro 2020",
    descripcion: "8GB RAM - 128GB ROM - 40 MPX",
    precio: "25,779",
    imagen: "img/huawei p30.jpg",
    id: "huawei-p30",
    categoria: "Celulares",
    marca: "huawei",
  },
  {
    nombre: "iPhone 14",
    descripcion: "6GB RAM - 128GB ROM - 48 MPX",
    precio: "23,499",
    imagen: "img/iphone.png",
    id: "iphone-14",
    categoria: "Celulares",
    marca: "apple",
  },
  {
    nombre: "Samsung A51",
    descripcion: "4GB RAM - 64GB ROM - 25 MPX",
    precio: "9,499",
    imagen: "img/Samsung A50.jpg",
    id: "samsung-a51",
    categoria: "Celulares",
    marca: "samsung",
  },
  {
    nombre: "Huawei P31 Pro 2021",
    descripcion: "8GB RAM - 128GB ROM - 40 MPX",
    precio: "25,779",
    imagen: "img/huawei p30.jpg",
    id: "huawei-p31",
    categoria: "Celulares",
    marca: "huawei",
  },
  {
    nombre: "iPhone 15",
    descripcion: "6GB RAM - 128GB ROM - 48 MPX",
    precio: "23,499",
    imagen: "img/iphone.png",
    id: "iphone-15",
    categoria: "Celulares",
    marca: "apple",
  },
  {
    nombre: "LG G Pad 5",
    descripcion: "4GB RAM - 32GB ROM - 8 MPX",
    precio: "6,899",
    imagen: "img/TabletaLg.jpg",
    id: "lg-g-pad5",
    categoria: "Tabletas",
    marca: "lg",
  },
  {
    nombre: "MOTO TAB G62",
    descripcion: "4GB RAM - 64GB ROM - 8 MPX",
    precio: "6,599",
    imagen: "img/tabletMoto.jpeg",
    id: "moto-tab-g62",
    categoria: "Tabletas",
    marca: "motorola",
  },
  {
    nombre: "Lenovo Tab M10",
    descripcion: "4GB RAM - 64GB ROM - 8 MPX",
    precio: "3,999",
    imagen: "img/tabletaLenovo.jpg",
    id: "lenovo-tab-m10",
    categoria: "Tabletas",
    marca: "lenovo",
  },
  {
    nombre: "LG G Pad 6",
    descripcion: "4GB RAM - 32GB ROM - 8 MPX",
    precio: "6,899",
    imagen: "img/TabletaLg.jpg",
    id: "lg-g-pad6",
    categoria: "Tabletas",
    marca: "lg",
  },
  {
    nombre: "MOTO TAB G63",
    descripcion: "4GB RAM - 64GB ROM - 8 MPX",
    precio: "6,599",
    imagen: "img/tabletMoto.jpeg",
    id: "moto-tab-g63",
    categoria: "Tabletas",
    marca: "motorola",
  },
  {
    nombre: "Lenovo Tab M11",
    descripcion: "4GB RAM - 64GB ROM - 8 MPX",
    precio: "3,999",
    imagen: "img/tabletaLenovo.jpg",
    id: "lenovo-tab-m12",
    categoria: "Tabletas",
    marca: "lenovo",
  },
  {
    nombre: "Audifonos SONY WH-1000XM5",
    descripcion: "Cancelacion de ruido - Inalambricos",
    precio: "5,999",
    imagen: "img/CascosSony.jpg",
    id: "audifonos-sony-wh1000xm5",
    categoria: "Accesorios",
    marca: "sony",
  },
  {
    nombre: "Audiculares ZTE LIVEBUDS",
    descripcion: "Cancelacion de rudio - TWS - Control tactil - Inalambricos",
    precio: "819",
    imagen: "img/AudicularesZTE.webp",
    id: "audiculares-zte-livebuds",
    categoria: "Accesorios",
    marca: "zte",
  },
  {
    nombre: "Audifono HTC Wired ",
    descripcion: "Cableado - 20/20Hz",
    precio: "249",
    imagen: "img/audicularesHTC.jpg",
    id: "audifonos-htc-wired",
    categoria: "Accesorios",
    marca: "htc",
  },
  {
    nombre: "Audifonos SONY WH-1000XM6",
    descripcion: "Cancelacion de ruido - Inalambricos",
    precio: "5,999",
    imagen: "img/CascosSony.jpg",
    id: "audifonos-sony-wh1000xm6",
    categoria: "Accesorios",
    marca: "sony",
  },
  {
    nombre: "Audiculares ZTE LIVEBUDS 01",
    descripcion: "Cancelacion de rudio - TWS - Control tactil - Inalambricos",
    precio: "819",
    imagen: "img/AudicularesZTE.webp",
    id: "audiculares-zte-livebuds-01",
    categoria: "Accesorios",
    marca: "zte",
  },
  {
    nombre: "Audifono HTC Wired 01",
    descripcion: "Cableado - 20/20Hz",
    precio: "249",
    imagen: "img/audicularesHTC.jpg",
    id: "audifonos-htc-wired-01",
    categoria: "Accesorios",
    marca: "htc",
  },
];
const articulosFiltrados = [];
const articulosCatalogo = [];
const articulosBusqueda = [];
const articulosCarrito = [];

//======== FUNCIONES =========

//FUNCIONES PARA CARGAR LOS OBJETOS AL DOM

function cargarDispositivos() {
  let fragmentCelulares = document.createDocumentFragment();
  let fragmentTabletas = document.createDocumentFragment();
  let fragmentAccesorios = document.createDocumentFragment();
  dispositivos.forEach((dispositivo) => {
    const div = document.createElement("DIV");
    div.classList.add("div-articulo");
    div.classList.add(dispositivo.categoria);
    div.classList.add("div-articulo-filtrado");
    div.classList.add("div-articulo-filcat");
    div.setAttribute("id", dispositivo.id);
    div.setAttribute("data-nombreArticulo", dispositivo.nombre);
    div.setAttribute("data-descArticulo", dispositivo.descripcion);
    div.setAttribute("data-precioArticulo", dispositivo.precio);
    div.setAttribute("data-marcaArticulo", dispositivo.marca);
    div.setAttribute("data-imagenArticulo", dispositivo.imagen);
    div.innerHTML = `
            <div class="div-imagen-articulo">
                <img src="${dispositivo.imagen}" alt="${dispositivo.nombre}"class="imagen-articulo">
            </div>
            <div class="div-detalles-articulo">
                <h3 class="nombre-articulo">${dispositivo.nombre}</h3>
                <p class="descripcion-articulo">${dispositivo.descripcion}</p>
            </div>
            <div class="div-precio-comprar-articulo">
                <p class="precio-articulo">$${dispositivo.precio}</p>
                <button class="boton-agregar">AGREGAR</button>
            </div>
        `;
    let comprobacion = dispositivo.categoria.toLowerCase();
    if (comprobacion == "celulares") {
      fragmentCelulares.append(div);
    } else if (comprobacion == "tabletas") {
      fragmentTabletas.append(div);
    } else if (comprobacion == "accesorios") {
      fragmentAccesorios.append(div);
    }
  });
  contenedorCelulares.append(fragmentCelulares);
  contenedorTabletas.append(fragmentTabletas);
  contenedorAccesorios.append(fragmentAccesorios);
}
cargarDispositivos();
const botonAgregar = document.querySelectorAll(".boton-agregar");

//FUNCIONES PARA FUNCIONAMIENTO DEL FILTRADO

function filtrado() {
  const filtrados = document.querySelectorAll(".div-articulo");
  const arrayFiltrados = Array.from(filtrados);

  let vInputPrecio1 = inputPrecio1.value;
  let vInputPrecio2 = inputPrecio2.value;
  let vInputRangoRam = inputRangeRam.value;
  let vInputRangoRom = inputRangeRom.value;
  let vInputRangoMpx = inputRangeMpx.value;

  arrayFiltrados.forEach((dispositivo) => {
    dispositivo.style.width = widthArtFiltros;
    let precioAtributo = dispositivo.getAttribute("data-precioArticulo");
    let vPrecioComa = precioAtributo.replace(",", "");
    let vPrecio = parseInt(vPrecioComa);

    let vDes = dispositivo.getAttribute("data-descarticulo");
    let vDesRam = `${vInputRangoRam}GB RAM`;
    let vDesRom = `${vInputRangoRom}GB ROM`;
    let vDesMpx = `${vInputRangoMpx} MPX`;

    let rDesRam = vDes.includes(vDesRam);
    let rDesRom = vDes.includes(vDesRom);
    let rDesMpx = vDes.includes(vDesMpx);

    if (
      (vPrecio >= vInputPrecio1 && vPrecio <= vInputPrecio2) ||
      rDesRom == true ||
      rDesRam == true ||
      rDesMpx == true
    ) {
      divReFil.appendChild(dispositivo);
      articulosFiltrados.push(dispositivo);
    }
  });
}
function aparecerDiv() {
  divFiltrado.style.display = "flex";
  contenedorObjetos.style.display = "none";
}
function volverInicioFiltro() {
  if (articulosFiltrados.length > 0) {
    articulosFiltrados.forEach((art) => {
      let comprobacionClaseCelulares = art.classList.contains("Celulares");
      let comprobacionClaseTabletas = art.classList.contains("Tabletas");
      let comprobacionClaseAccesorios = art.classList.contains("Accesorios");

      if (comprobacionClaseCelulares == true) {
        contenedorCelulares.append(art);
      } else if (comprobacionClaseTabletas == true) {
        contenedorTabletas.append(art);
      } else if (comprobacionClaseAccesorios) {
        contenedorAccesorios.append(art);
      }
    });
    divFiltrado.style.display = "none";
    contenedorObjetos.style.display = "flex";
  }
  if (articulosBusqueda.length > 0) {
    articulosBusqueda.forEach((art) => {
      let comprobacionClaseCelulares = art.classList.contains("Celulares");
      let comprobacionClaseTabletas = art.classList.contains("Tabletas");
      let comprobacionClaseAccesorios = art.classList.contains("Accesorios");

      if (comprobacionClaseCelulares == true) {
        contenedorCelulares.append(art);
      } else if (comprobacionClaseTabletas == true) {
        contenedorTabletas.append(art);
      } else if (comprobacionClaseAccesorios) {
        contenedorAccesorios.append(art);
      }
    });
    divFiltrado.style.display = "none";
    contenedorObjetos.style.display = "flex";
  }
}

//FUNCIONES PARA FUNCIONAMIENTO DEL FILTRADO POR CATALOGO

function filCat(marca) {
  const filtradosCatalogo = document.querySelectorAll(".div-articulo");
  const arrayFilCat = Array.from(filtradosCatalogo);
  let pases = 0;
  arrayFilCat.forEach((dispositivo) => {
    dispositivo.style.width = widthArtFiltrado;
    let marcaArticulo = dispositivo.getAttribute("data-marcaArticulo");
    let marcaArtLower = marcaArticulo.toLowerCase();

    if (marcaArtLower == marca) {
      divFilCat.appendChild(dispositivo);
      articulosCatalogo.push(dispositivo);
      tituloFilCat.innerText = marca;
    } else {
      pases++;
      if (pases == arrayFilCat.length) {
        tituloFilCat.innerText = `Aun no contamos con equipos ${marca}`;
      }
    }
  });
  aparecerDivCatalogo();
}
function aparecerDivCatalogo() {
  divFiltroCatalogo.style.display = "flex";
  divObjetosCatalogo.style.display = "none";
  asideCatalogo.style.display = "none";
  tituloCatalogo.style.display = "none";
}
function volverInicioCatalogo() {
  articulosCatalogo.forEach((art) => {
    let comprobacionClaseCelulares = art.classList.contains("Celulares");
    let comprobacionClaseTabletas = art.classList.contains("Tabletas");
    let comprobacionClaseAccesorios = art.classList.contains("Accesorios");

    if (comprobacionClaseCelulares == true) {
      contenedorCelulares.append(art);
    } else if (comprobacionClaseTabletas == true) {
      contenedorTabletas.append(art);
    } else if (comprobacionClaseAccesorios) {
      contenedorAccesorios.append(art);
    }
  });
  divFiltroCatalogo.style.display = "none";
  divObjetosCatalogo.style.display = "flex";
  asideCatalogo.style.display = "flex";
  tituloCatalogo.style.display = "flex";
}

//FUNCIONES PARA FUNCIONAMIENTO DEL FILTRADO POR CATALOGO

function filBus() {
  const filtradosBusqueda = document.querySelectorAll(".div-articulo");
  const arrayFilBus = Array.from(filtradosBusqueda);
  let vBusqueda = buscador.value.toLowerCase();
  let vBusArray = vBusqueda.split(" ");
  let pasesDis = 0;
  arrayFilBus.forEach((dispositivo) => {
    dispositivo.style.width = widthArtFiltrado;
    let vInnerText = dispositivo.innerHTML.toLowerCase();
    console.log(vInnerText);
    console.log(vBusArray);
    let innerTrue;
    let pasesBus = 0;
    vBusArray.forEach((bus) => {
      let innerIncluides = vInnerText.includes(bus);
      if (innerIncluides) {
        innerTrue = true;
      } else {
        pasesBus++;
        if (pasesBus == vBusArray.length) {
          innerTrue = false;
        }
      }
    });
    if (innerTrue) {
      divReFil.appendChild(dispositivo);
      articulosBusqueda.push(dispositivo);
      tituloFiltrados.innerText = "Resultados";
    } else {
      pasesDis++;
      if (pasesDis == arrayFilBus.length) {
        tituloFiltrados.innerText = "No hay resultados:(";
      }
    }
  });
  aparecerDiv();
}

//FUNCIONES PARA FUNCIONAMIENTO DEL CARRITO
let total = 0;
function agregarCarrito(padreDis) {
  let nombreDis = padreDis.getAttribute("data-nombreArticulo");
  let imagenDis = padreDis.getAttribute("data-imagenArticulo");
  let precioDis = padreDis.getAttribute("data-precioArticulo");
  let precioInt = parseInt(precioDis.replace(",", ""));

  let idDis = padreDis.getAttribute("id");
  let articuloCarrito = {
    nombre: nombreDis,
    precio: precioDis,
    precioGS: precioInt,
    precioSuma: precioInt,
    id: idDis,
    idArt: `${idDis}-carrito`,
    cantidad: 1,
    img: imagenDis,
  };
  if (articulosCarrito.length > 0) {
    let pasesCarrito = 0;
    articulosCarrito.forEach((art) => {
      if (art.idArt == articuloCarrito.idArt) {
        art.cantidad++;
        let suma = art.precioGS + art.precioSuma;
        art.precio = suma.toLocaleString();
        art.precioGS = suma;

        const artACambiar = document.getElementById(art.idArt);
        artACambiar.innerHTML = `
                <img src="${art.img}" class="imagen-ac">
                <div class="div-titulo-desc-ac div-cantidad-ac">
                    <h4 class="titulo-desc-ac">cantidad:</h4>
                    <p class="info-desc-ac cantidad-ac">${art.cantidad}</p>
                </div>
                <div class="div-titulo-desc-ac div-precio-ac">
                    <h4 class="titulo-desc-ac">precio:</h4>
                    <p class="info-desc-ac precio-ac">${art.precio}</p>
                </div>
                <div class="div-mas-menos-ac">
                    <p class="bi bi-plus-square icon-mas-menos-ac icon-agregar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                      art
                    )}"></p>
                    <p class="bi-trash icon-mas-menos-ac icon-eliminar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                      art
                    )}"></p>
                </div>`;
      } else {
        pasesCarrito++;
        if (pasesCarrito == articulosCarrito.length) {
          articulosCarrito.push(articuloCarrito);
          const div = document.createElement("DIV");
          div.classList.add("articulo-carrito");
          div.setAttribute("id", articuloCarrito.idArt);
          div.setAttribute(
            "data-idArray",
            articulosCarrito.indexOf(articuloCarrito)
          );
          div.setAttribute("data-artNombre", articuloCarrito.nombre);
          div.innerHTML = `
                    <img src="${articuloCarrito.img}" class="imagen-ac">
                    <div class="div-titulo-desc-ac div-cantidad-ac">
                        <h4 class="titulo-desc-ac">cantidad:</h4>
                        <p class="info-desc-ac cantidad-ac">${
                          articuloCarrito.cantidad
                        }</p>
                    </div>
                    <div class="div-titulo-desc-ac div-precio-ac">
                        <h4 class="titulo-desc-ac">precio:</h4>
                        <p class="info-desc-ac precio-ac">${
                          articuloCarrito.precio
                        }</p>
                    </div>
                    <div class="div-mas-menos-ac">
                        <p class="bi bi-plus-square icon-mas-menos-ac icon-agregar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                          articuloCarrito
                        )}"></p>
                        <p class="bi-trash icon-mas-menos-ac icon-eliminar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                          articuloCarrito
                        )}"></p>
                    </div>`;
          divLisArt.append(div);
        }
      }
    });
  } else {
    articulosCarrito.push(articuloCarrito);
    const div = document.createElement("DIV");
    div.classList.add("articulo-carrito");
    div.setAttribute("id", articuloCarrito.idArt);
    div.setAttribute("data-idArray", articulosCarrito.indexOf(articuloCarrito));
    div.setAttribute("data-artNombre", articuloCarrito.nombre);
    div.innerHTML = `
        <img src="${articuloCarrito.img}" class="imagen-ac">
        <div class="div-titulo-desc-ac div-cantidad-ac">
            <h4 class="titulo-desc-ac">cantidad:</h4>
            <p class="info-desc-ac cantidad-ac">${articuloCarrito.cantidad}</p>
        </div>
        <div class="div-titulo-desc-ac div-precio-ac">
            <h4 class="titulo-desc-ac">precio:</h4>
            <p class="info-desc-ac precio-ac">${articuloCarrito.precio}</p>
        </div>
        <div class="div-mas-menos-ac">
            <p class="bi bi-plus-square icon-mas-menos-ac icon-agregar-ac" data-idArrayArt="${articulosCarrito.indexOf(
              articuloCarrito
            )}"></p>
            <p class="bi-trash icon-mas-menos-ac icon-eliminar-ac" data-idArrayArt="${articulosCarrito.indexOf(
              articuloCarrito
            )}"></p>
        </div>`;
    divLisArt.append(div);
  }
  total = 0;
  articulosCarrito.forEach((artPrecio) => {
    total += artPrecio.precioGS;
  });
  precioTotalCarrito.innerText = `$${total.toLocaleString()}`;
  eventosBotonesMasMenos();
}
function agregarOtroArt(padreDisMas) {
  let idPadreDMas = padreDisMas.getAttribute("id");
  articulosCarrito.forEach((art) => {
    if (art.idArt == idPadreDMas) {
      art.cantidad++;
      let suma = art.precioGS + art.precioSuma;
      art.precio = suma.toLocaleString();
      art.precioGS = suma;

      const artACambiar = document.getElementById(art.idArt);
      artACambiar.innerHTML = `
            <img src="${art.img}" class="imagen-ac">
            <div class="div-titulo-desc-ac div-cantidad-ac">
                <h4 class="titulo-desc-ac">cantidad:</h4>
                <p class="info-desc-ac cantidad-ac">${art.cantidad}</p>
            </div>
            <div class="div-titulo-desc-ac div-precio-ac">
                <h4 class="titulo-desc-ac">precio:</h4>
                <p class="info-desc-ac precio-ac">${art.precio}</p>
            </div>
            <div class="div-mas-menos-ac">
                <p class="bi bi-plus-square icon-mas-menos-ac icon-agregar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                  art
                )}"></p>
                <p class="bi-trash icon-mas-menos-ac icon-eliminar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                  art
                )}"></p>
            </div>`;
      total = 0;
      articulosCarrito.forEach((artPrecio) => {
        total += artPrecio.precioGS;
      });
      precioTotalCarrito.innerText = `$${total.toLocaleString()}`;
    }
  });
  eventosBotonesMasMenos();
}
function eliminarOtroArt(padreDisMenos) {
  let idPadreDMenos = padreDisMenos.getAttribute("id");
  let idArrayPadre = padreDisMenos.getAttribute("data-idArray");
  articulosCarrito.forEach((art) => {
    if (art.idArt == idPadreDMenos) {
      art.cantidad--;
      let resta = art.precioGS - art.precioSuma;
      art.precio = resta.toLocaleString();
      art.precioGS = resta;
      if (art.cantidad == 0) {
        articulosCarrito.splice(idArrayPadre, 1);
        padreDisMenos.remove();
      } else {
        const artACambiar = document.getElementById(art.idArt);
        artACambiar.innerHTML = `
                <img src="${art.img}" class="imagen-ac">
                <div class="div-titulo-desc-ac div-cantidad-ac">
                    <h4 class="titulo-desc-ac">cantidad:</h4>
                    <p class="info-desc-ac cantidad-ac">${art.cantidad}</p>
                </div>
                <div class="div-titulo-desc-ac div-precio-ac">
                    <h4 class="titulo-desc-ac">precio:</h4>
                    <p class="info-desc-ac precio-ac">${art.precio}</p>
                </div>
                <div class="div-mas-menos-ac">
                    <p class="bi bi-plus-square icon-mas-menos-ac icon-agregar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                      art
                    )}"></p>
                    <p class="bi-trash icon-mas-menos-ac icon-eliminar-ac" data-idArrayArt="${articulosCarrito.indexOf(
                      art
                    )}"></p>
                </div>`;
      }
      total = 0;
      articulosCarrito.forEach((artPrecio) => {
        total += artPrecio.precioGS;
      });
      precioTotalCarrito.innerText = `$${total.toLocaleString()}`;
    }
  });
  eventosBotonesMasMenos();
}
function eventosBotonesMasMenos() {
  const botonesAgregarArt = document.querySelectorAll(".icon-agregar-ac");
  const botonesEliminarArt = document.querySelectorAll(".icon-eliminar-ac");
  botonesAgregarArt.forEach((btnAgregar) => {
    btnAgregar.addEventListener("click", () => {
      let padreBotonAgregar = btnAgregar.parentElement.parentElement;
      agregarOtroArt(padreBotonAgregar);
    });
  });
  botonesEliminarArt.forEach((btnEliminar) => {
    btnEliminar.addEventListener("click", () => {
      let padreBotonEliminar = btnEliminar.parentElement.parentElement;
      eliminarOtroArt(padreBotonEliminar);
    });
  });
}

//FUNCIONES PARA LOS SLIDER

function creacionSlider(mNS, mPS) {
  const slidersArticulos = document.querySelectorAll(".slider");
  const arraySA = Array.from(slidersArticulos);
  arraySA.forEach((sa) => {
    let artClass = sa.getAttribute("data-sliderArtClass");
    let articulosSlider = document.querySelectorAll(`.${artClass}`);
    let ultimoArtSlider = articulosSlider[articulosSlider.length - 1];
    let btnLeftSlider = document.getElementById(
      `boton-left-${artClass.toLowerCase()}`
    );
    let btnRightSlider = document.getElementById(
      `boton-right-${artClass.toLowerCase()}`
    );
    sa.insertAdjacentElement("afterbegin", ultimoArtSlider);

    function next() {
      let primerArtSlider = document.querySelectorAll(`.${artClass}`)[0];
      sa.style.left = mNS;
      sa.style.transition = "all 0.2s";
      setTimeout(() => {
        sa.style.transition = "none";
        sa.insertAdjacentElement("beforeend", primerArtSlider);
        sa.style.left = "0";
      }, 200);
    }
    function prev() {
      let artsSlider = document.querySelectorAll(`.${artClass}`);
      let ultimoArtSlider = artsSlider[artsSlider.length - 1];
      sa.style.left = mPS;
      sa.style.transition = "all 0.2s";
      setTimeout(() => {
        sa.style.transition = "none";
        sa.insertAdjacentElement("afterbegin", ultimoArtSlider);
        sa.style.left = "0";
      }, 200);
    }
    btnRightSlider.addEventListener("click", () => {
      next();
    });
    btnLeftSlider.addEventListener("click", () => {
      prev();
    });
  });
}
function nextResponsiveSlider(primerMedidaReturn) {
  let sliderArticulos = document.querySelector(".slider");
  let sliderWidth = window
    .getComputedStyle(sliderArticulos)
    .getPropertyValue("margin-left")
    .replace("-", "");
  let sliderWidthPx = sliderWidth.replace("px", "");

  let operacionMedida = sliderWidthPx / 2;
  primerMedidaReturn = `-${operacionMedida}px`;
  return primerMedidaReturn;
}
function prevResponsiveSlider(primerMedidaReturn) {
  let sliderArticulos = document.querySelector(".slider");
  let sliderWidth = window
    .getComputedStyle(sliderArticulos)
    .getPropertyValue("margin-left")
    .replace("-", "");
  let sliderWidthPx = sliderWidth.replace("px", "");

  let operacionMedida = sliderWidthPx / 2;
  primerMedidaReturn = `${operacionMedida}px`;
  return primerMedidaReturn;
}

//======== EVENTOS =========

bar.addEventListener("click", () => {
  nav.style = "right: 0";
});
btnCarrito.addEventListener("click", () => {
  divCarrito.style.left = "0";
});
iconCerrarCarrito.addEventListener("click", () => {
  divCarrito.style.left = "-100%";
});

let showFiltro = true;
filtro.addEventListener("click", () => {
  if (showFiltro == true) {
    divFiltro.style.display = "block";
    botonFiltrar.addEventListener("click", () => {
      divFiltro.style.display = "none";
      aparecerDiv();
      filtrado();
      return (showFiltro = true);
    });
    return (showFiltro = false);
  } else if (showFiltro == false) {
    divFiltro.style.display = "none";
    return (showFiltro = true);
  }
});
inputRange.forEach((range) => {
  range.addEventListener("input", () => {
    let vRange = range.value;
    range.setAttribute("value", vRange);
    let dataFrom = range.getAttribute("data-from");
    let i = arrayIR.indexOf(range);
    let palabra = arrayPIG.slice(1)[i];
    palabra.innerHTML = `${dataFrom}: ${vRange}`;
  });
});
botonRegFil.addEventListener("click", () => {
  volverInicioFiltro();
});
divsCatalogo.forEach((divcat) => {
  divcat.addEventListener("click", () => {
    let marcaDiv = divcat.getAttribute("data-marcaCatalogo");
    let marcaDivLower = marcaDiv.toLowerCase();
    filCat(marcaDivLower);
  });
});
botonRegCat.addEventListener("click", () => {
  volverInicioCatalogo();
});
botonBuscar.addEventListener("click", () => {
  filBus();
});
botonAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    let padreDispositivo = boton.parentElement.parentElement;
    agregarCarrito(padreDispositivo);
  });
});
botonEliminarTodoCarrito.addEventListener("click", () => {
  let numArt = divLisArt.children.length;
  console.log(numArt);
  let i = 0;
  for (i; i < numArt; i++) {
    console.log(i);
    let eliminarArt = divLisArt.firstElementChild;
    eliminarArt.remove();
    articulosCarrito.pop();
  }
  console.log(i);
  precioTotalCarrito.innerHTML = "$0";
  total = 0;
});
window.addEventListener("DOMContentLoaded", () => {
  let medidaNextSlider;
  let medidaPrevSlider;
  nextResponsiveSlider(medidaNextSlider);
  prevResponsiveSlider(medidaPrevSlider);
  creacionSlider(medidaNextSlider, medidaPrevSlider);
  window.addEventListener("resize", () => {
    let medidaNextSlider;
    let medidaPrevSlider;
    nextResponsiveSlider(medidaNextSlider);
    prevResponsiveSlider(medidaPrevSlider);
    creacionSlider(medidaNextSlider, medidaPrevSlider);
  });
});
botonComprarCarrito.addEventListener('click', () => {
  alert('gracias por su comprar:D');
  setTimeout(() => {
    window.location.reload();
  }, 1000);
})

