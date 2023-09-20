
const target = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
target.forEach(target => {
    target.addEventListener('click', () => {

        content.forEach(c => {
            c.classList.remove('active');
        })

        const t = document.querySelector(target.dataset.target)
        t.classList.add('active');
    })
});
const btnCarrito = document.getElementById('carrito-icon');
btnCarrito.addEventListener('click', () => {
    window.location = 'carrito.html';
})
//ARRAY DE OBJETOS
const celulares = [
    {
        nombre:'Samsung A50',
        descripcion:'4GB RAM - 64GB ROM - 25 MPX',
        precio:'$9,499',
        imagen:'img/Samsung A50.jpg',
        id:'samsung-a50',
        categoria:'Celulares'
    },
    {
        nombre:'Huawei P30 Pro 2020',
        descripcion:'8GB RAM - 128GB ROM - 40 MPX',
        precio:'$25,779',
        imagen:'img/huawei p30.jpg',
        id:'huawei-p30',
        categoria:'Celulares'
    },
    {
        nombre:'iPhone 14',
        descripcion:'6GB RAM - 128 GB ROM - 48 MPX',
        precio:'$23,499',
        imagen:'img/iphone.png',
        id:'iphone-14',
        categoria:'Celulares'
    },
    {
        nombre:'Samsung A51',
        descripcion:'4GB RAM - 64GB ROM - 25 MPX',
        precio:'$9,499',
        imagen:'img/Samsung A50.jpg',
        id:'samsung-a51',
        categoria:'Celulares'
    },
    {
        nombre:'Huawei P31 Pro 2021',
        descripcion:'8GB RAM - 128GB ROM - 40 MPX',
        precio:'$25,779',
        imagen:'img/huawei p30.jpg',
        id:'huawei-p31',
        categoria:'Celulares'
    },
    {
        nombre:'iPhone 15',
        descripcion:'6GB RAM - 128 GB ROM - 48 MPX',
        precio:'$23,499',
        imagen:'img/iphone.png',
        id:'iphone-15',
        categoria:'Celulares'
    },
    
];
const tabletas = [
    {
        nombre:'LG G Pad 5',
        descripcion:'4GB RAM - 32GB ROM - 8 MPX',
        precio:'$6,899',
        imagen:'img/TabletaLg.jpg',
        id:'lg-g-pad5',
        categoria:'Tabletas'
    },
    {
        nombre:'MOTO TAB G62',
        descripcion:'4GB RAM - 64GB ROM - 8 MPX',
        precio:'$6,599',
        imagen:'img/tabletMoto.jpeg',
        id:'moto-tab-g62',
        categoria:'Tabletas'
    },
    {
        nombre:'Lenovo Tab M10',
        descripcion:'4GB RAM - 64 GB ROM - 8 MPX',
        precio:'$3,999',
        imagen:'img/tabletaLenovo.jpg',
        id:'lenovo-tab-m10',
        categoria:'Tabletas'
    },
    {
        nombre:'LG G Pad 6',
        descripcion:'4GB RAM - 32GB ROM - 8 MPX',
        precio:'$6,899',
        imagen:'img/TabletaLg.jpg',
        id:'lg-g-pad6',
        categoria:'Tabletas'
    },
    {
        nombre:'MOTO TAB G63',
        descripcion:'4GB RAM - 64GB ROM - 8 MPX',
        precio:'$6,599',
        imagen:'img/tabletMoto.jpeg',
        id:'moto-tab-g63',
        categoria:'Tabletas'
    },
    {
        nombre:'Lenovo Tab M11',
        descripcion:'4GB RAM - 64 GB ROM - 8 MPX',
        precio:'$3,999',
        imagen:'img/tabletaLenovo.jpg',
        id:'lenovo-tab-m12'
    },
    
];
const accesorios = [
    {
        nombre:'Audifonos <br>SONY WH-1000XM5',
        descripcion:'Cancelacion de ruido - Inalambricos',
        precio:'$5,999',
        imagen:'img/CascosSony.jpg',
        id:'audifonos-sony-wh1000xm5',
        categoria:'Accesorios'
    },
    {
        nombre:'Audiculares <br>ZTE LIVEBUDS',
        descripcion:'Cancelacion de rudio - TWS - Control tactil - Inalambricos',
        precio:'$819',
        imagen:'img/AudicularesZTE.webp',
        id:'audiculares-zte-livebuds',
        categoria:'Accesorios'
    },
    {
        nombre:'Audifono <br>HTC Wired ',
        descripcion:'Cableado - 20/20Hz',
        precio:'$249',
        imagen:'img/audicularesHTC.jpg',
        id:'audifonos-htc-wired'
    },
    {
        nombre:'Audifonos <br>SONY WH-1000XM6',
        descripcion:'Cancelacion de ruido - Inalambricos',
        precio:'$5,999',
        imagen:'img/CascosSony.jpg',
        id:'audifonos-sony-wh1000xm6',
        categoria:'Accesorios'
    },
    {
        nombre:'Audiculares <br>ZTE LIVEBUDS 01',
        descripcion:'Cancelacion de rudio - TWS - Control tactil - Inalambricos',
        precio:'$819',
        imagen:'img/AudicularesZTE.webp',
        id:'audiculares-zte-livebuds-01',
        categoria:'Accesorios'
    },
    {
        nombre:'Audifono <br>HTC Wired 01',
        descripcion:'Cableado - 20/20Hz',
        precio:'$249',
        imagen:'img/audicularesHTC.jpg',
        id:'audifonos-htc-wired-01',
        categoria:'Accesorios'
    },
    
];
//FUNCIONES PARA CARGAR LOS OBJETOS AL DOM
const contenedorCelulares = document.getElementById('slider-celulares');
const contenedorTabletas = document.getElementById('slider-tabletas');
const contenedorAccesorios = document.getElementById('slider-accesorios');
function cargarCelulares() {
    celulares.forEach(celular => {
        const div = document.createElement('div');
        div.classList.add('div-articulo');
        div.classList.add(`${celular.categoria}`);
        div.setAttribute('id',`${celular.id}`);
        div.innerHTML = `
            <div class="div-imagen-articulo">
                <img src="${celular.imagen}" alt="${celular.nombre}"class="imagen-articulo">
            </div>
            <div class="div-detalles-articulo">
                <h3 class="nombre-articulo">${celular.nombre}</h3>
                <p class="descripcion-articulo">${celular.descripcion}</p>
            </div>
            <div class="div-precio-comprar-articulo">
                <p class="precio-articulo">${celular.precio}</p>
                <button class="boton-agregar">AGREGAR</button>
            </div>
        `
        contenedorCelulares.append(div);
    })
    
};
function cargarTabletas() {
    tabletas.forEach(tableta => {
        const div = document.createElement('div');
        div.classList.add('div-articulo');
        div.classList.add(`${tableta.categoria}`);
        div.setAttribute('id',`${tableta.id}`);
        div.innerHTML = `
            <div class="div-imagen-articulo">
                <img src="${tableta.imagen}" alt="${tableta.nombre}"class="imagen-articulo">
            </div>
            <div class="div-detalles-articulo">
                <h3 class="nombre-articulo">${tableta.nombre}</h3>
                <p class="descripcion-articulo">${tableta.descripcion}</p>
            </div>
            <div class="div-precio-comprar-articulo">
                <p class="precio-articulo">${tableta.precio}</p>
                <button class="boton-agregar">AGREGAR</button>
            </div>
        `
        contenedorTabletas.append(div);
    })
    
};
function cargarAccesorios() {
    accesorios.forEach(accesorio => {
        const div = document.createElement('div');
        div.classList.add('div-articulo');
        div.classList.add(`${accesorio.categoria}`);
        div.setAttribute('id',`${accesorio.id}`);
        div.innerHTML = `
            <div class="div-imagen-articulo">
                <img src="${accesorio.imagen}" alt="${accesorio.nombre}"class="imagen-articulo">
            </div>
            <div class="div-detalles-articulo">
                <h3 class="nombre-articulo">${accesorio.nombre}</h3>
                <p class="descripcion-articulo">${accesorio.descripcion}</p>
            </div>
            <div class="div-precio-comprar-articulo">
                <p class="precio-articulo">${accesorio.precio}</p>
                <button class="boton-agregar">AGREGAR</button>
            </div>
        `
        contenedorAccesorios.append(div);
    })
    
};
cargarCelulares();
cargarTabletas();
cargarAccesorios();


//S L I D E R

//vARIABLES PARA SELECCIONAR LOS SLIDERS DE CADA SECCION
const sliderCelurares = document.getElementById('slider-celulares');
const sliderTabletas = document.getElementById('slider-tabletas');
const sliderAccesorios = document.getElementById('slider-accesorios');

//vARIABLES PARA SELECCIONAR LOS DIV DE CADA SECCION
let sliderSectionCelulares = document.querySelectorAll('.Celulares');
let sliderSectionTabletas = document.querySelectorAll('.Tabletas');
let sliderSectionAccesorios = document.querySelectorAll('.Accesorios');

//vARIABLES PARA SELECCIONAR EL ULTIMO DIV DE CADA SECCION
let sliderSectionLastCelulares = sliderSectionCelulares[sliderSectionCelulares.length -1];
let sliderSectionLastTabletas = sliderSectionTabletas[sliderSectionTabletas.length -1];
let sliderSectionLastAccesorios = sliderSectionAccesorios[sliderSectionAccesorios.length -1];

//vARIABLES PARA SELECCIONAR LOS BOTONES DE CADA SLIDER DE SU SECCION
const btnLeftCelulares = document.querySelector('#boton-left-celulares');
const btnRightCelulares = document.querySelector('#boton-right-celulares');

const btnLeftTabletas = document.querySelector('#boton-left-tabletas');
const btnRightTabletas = document.querySelector('#boton-right-tabletas');

const btnLeftAccesorios = document.querySelector('#boton-left-accesorios');
const btnRightAccesorios = document.querySelector('#boton-right-accesorios');

//vARIABLES PARA PONER EL ULTIMO DIV DE CADA SECCION AL PRINCIPIO DE LOS DEMAS
sliderCelurares.insertAdjacentElement("afterbegin", sliderSectionLastCelulares);
sliderTabletas.insertAdjacentElement("afterbegin", sliderSectionLastTabletas);
sliderAccesorios.insertAdjacentElement("afterbegin", sliderSectionLastAccesorios);

//FUNCIONES PARA LOS BOTONES DE LA SECCION DE CELULARES
function nextCelulares() {
    let sliderSectionFirstCelulares = document.querySelectorAll('.Celulares')[0];
    sliderCelurares.style.marginLeft = '-32rem';
    sliderCelurares.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderCelurares.style.transition = 'none';
        sliderCelurares.insertAdjacentElement("beforeend", sliderSectionFirstCelulares);
        sliderCelurares.style.marginLeft = '-16rem';
        
    }, 500);
}
function prevCelulares() {
    let sliderSectionCelulares = document.querySelectorAll('.Celulares');
    let sliderSectionLastCelulares = sliderSectionCelulares[sliderSectionCelulares.length -1];
    sliderCelurares.style.marginLeft = '0rem';
    sliderCelurares.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderCelurares.style.transition = 'none';
        sliderCelurares.insertAdjacentElement("afterbegin", sliderSectionLastCelulares);
        sliderCelurares.style.marginLeft = '-16rem';
        
    }, 500);
}
//Funciones para responsive de 560px
function nextCelularesResponsive() {
    let sliderSectionFirstCelulares = document.querySelectorAll('.Celulares')[0];
    sliderCelurares.style.marginLeft = '-24rem';
    sliderCelurares.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderCelurares.style.transition = 'none';
        sliderCelurares.insertAdjacentElement("beforeend", sliderSectionFirstCelulares);
        sliderCelurares.style.marginLeft = '-12rem';
        
    }, 500);
}
function prevCelularesResponsive() {
    let sliderSectionCelulares = document.querySelectorAll('.Celulares');
    let sliderSectionLastCelulares = sliderSectionCelulares[sliderSectionCelulares.length -1];
    sliderCelurares.style.marginLeft = '0rem';
    sliderCelurares.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderCelurares.style.transition = 'none';
        sliderCelurares.insertAdjacentElement("afterbegin", sliderSectionLastCelulares);
        sliderCelurares.style.marginLeft = '-12rem';
        
    }, 500);
}//fin

//Funciones para responsive de 870px
function nextCelularesResponsive2() {
    let sliderSectionFirstCelulares = document.querySelectorAll('.Celulares')[0];
    sliderCelurares.style.marginLeft = '-30rem';
    sliderCelurares.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderCelurares.style.transition = 'none';
        sliderCelurares.insertAdjacentElement("beforeend", sliderSectionFirstCelulares);
        sliderCelurares.style.marginLeft = '-15rem';
        
    }, 500);
}
function prevCelularesResponsive2() {
    let sliderSectionCelulares = document.querySelectorAll('.Celulares');
    let sliderSectionLastCelulares = sliderSectionCelulares[sliderSectionCelulares.length -1];
    sliderCelurares.style.marginLeft = '0rem';
    sliderCelurares.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderCelurares.style.transition = 'none';
        sliderCelurares.insertAdjacentElement("afterbegin", sliderSectionLastCelulares);
        sliderCelurares.style.marginLeft = '-15rem';
        
    }, 500);
}//fin

btnRightCelulares.addEventListener('click', function(){
    nextCelulares();
});
btnLeftCelulares.addEventListener('click', function(){
    prevCelulares();
});

//Funciones de botones para responsive de 560px
btnRightCelulares.addEventListener('click', function(){
    // nextCelularesResponsive();
});
btnLeftCelulares.addEventListener('click', function(){
    // prevCelularesResponsive();
});//fin

//Funciones de botones para responsive de 870px
btnRightCelulares.addEventListener('click', function(){
    // nextCelularesResponsive2();
});
btnLeftCelulares.addEventListener('click', function(){
    // prevCelularesResponsive2();
});//fin


//FUNCIONES PARA LOS BOTONES DE LA SECCION DE TABLETAS
function nextTabletas() {
    let sliderSectionFirstTableta = document.querySelectorAll('.Tabletas')[0];
    sliderTabletas.style.marginLeft = '-32rem';
    sliderTabletas.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderTabletas.style.transition = 'none';
        sliderTabletas.insertAdjacentElement("beforeend", sliderSectionFirstTableta);
        sliderTabletas.style.marginLeft = '-16rem';
        
    }, 500);
}
function prevTabletas() {
    let sliderSectionTabletas = document.querySelectorAll('.Tabletas');
    let sliderSectionLastTabletas = sliderSectionTabletas[sliderSectionTabletas.length -1];
    sliderTabletas.style.marginLeft = '0rem';
    sliderTabletas.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderTabletas.style.transition = 'none';
        sliderTabletas.insertAdjacentElement("afterbegin", sliderSectionLastTabletas);
        sliderTabletas.style.marginLeft = '-16rem';
        
    }, 500);
}
//Funciones para responsive de 560px
function nextTabletasResponsive() {
    let sliderSectionFirstTableta = document.querySelectorAll('.Tabletas')[0];
    sliderTabletas.style.marginLeft = '-24rem';
    sliderTabletas.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderTabletas.style.transition = 'none';
        sliderTabletas.insertAdjacentElement("beforeend", sliderSectionFirstTableta);
        sliderTabletas.style.marginLeft = '-12rem';
        
    }, 500);
}
function prevTabletasResponsive() {
    let sliderSectionTabletas = document.querySelectorAll('.Tabletas');
    let sliderSectionLastTabletas = sliderSectionTabletas[sliderSectionTabletas.length -1];
    sliderTabletas.style.marginLeft = '0rem';
    sliderTabletas.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderTabletas.style.transition = 'none';
        sliderTabletas.insertAdjacentElement("afterbegin", sliderSectionLastTabletas);
        sliderTabletas.style.marginLeft = '-12rem';
        
    }, 500);
}//fin
//Funciones para responsive de 870px
function nextTabletasResponsive2() {
    let sliderSectionFirstTableta = document.querySelectorAll('.Tabletas')[0];
    sliderTabletas.style.marginLeft = '-30rem';
    sliderTabletas.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderTabletas.style.transition = 'none';
        sliderTabletas.insertAdjacentElement("beforeend", sliderSectionFirstTableta);
        sliderTabletas.style.marginLeft = '-15rem';
        
    }, 500);
}
function prevTabletasResponsive2() {
    let sliderSectionTabletas = document.querySelectorAll('.Tabletas');
    let sliderSectionLastTabletas = sliderSectionTabletas[sliderSectionTabletas.length -1];
    sliderTabletas.style.marginLeft = '0rem';
    sliderTabletas.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderTabletas.style.transition = 'none';
        sliderTabletas.insertAdjacentElement("afterbegin", sliderSectionLastTabletas);
        sliderTabletas.style.marginLeft = '-15rem';
        
    }, 500);
}//fin

btnRightTabletas.addEventListener('click', function(){
    nextTabletas();
});
btnLeftTabletas.addEventListener('click', function(){
    prevTabletas();
});

//Funciones de botones para responsive de 560px
btnRightTabletas.addEventListener('click', function(){
    // nextTabletasResponsive();
});
btnLeftTabletas.addEventListener('click', function(){
    // prevTabletasResponsive();
});//fin

//Funciones de botones para responsive de 870px
btnRightTabletas.addEventListener('click', function(){
    // nextTabletasResponsive2();
});
btnLeftTabletas.addEventListener('click', function(){
    // prevTabletasResponsive2();
});//fin


//FUNCIONES PARA LOS BOTONES DE LA SECCION DE ACCESORIOS
function nextAccesorios() {
    let sliderSectionFirstAccesorios = document.querySelectorAll('.Accesorios')[0];
    sliderAccesorios.style.marginLeft = '-32rem';
    sliderAccesorios.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderAccesorios.style.transition = 'none';
        sliderAccesorios.insertAdjacentElement("beforeend", sliderSectionFirstAccesorios);
        sliderAccesorios.style.marginLeft = '-16rem';
        
    }, 500);
}
function prevAccesorios() {
    let sliderSectionAccesorios = document.querySelectorAll('.Accesorios');
    let sliderSectionLastAccesorios = sliderSectionAccesorios[sliderSectionAccesorios.length -1];
    sliderAccesorios.style.marginLeft = '0rem';
    sliderAccesorios.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderAccesorios.style.transition = 'none';
        sliderAccesorios.insertAdjacentElement("afterbegin", sliderSectionLastAccesorios);
        sliderAccesorios.style.marginLeft = '-16rem';
        
    }, 500);
}

//Funciones para responsive de 560px
function nextAccesoriosResponsive() {
    let sliderSectionFirstAccesorios = document.querySelectorAll('.Accesorios')[0];
    sliderAccesorios.style.marginLeft = '-24rem';
    sliderAccesorios.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderAccesorios.style.transition = 'none';
        sliderAccesorios.insertAdjacentElement("beforeend", sliderSectionFirstAccesorios);
        sliderAccesorios.style.marginLeft = '-12rem';
        
    }, 500);
}
function prevAccesoriosResponsive() {
    let sliderSectionAccesorios = document.querySelectorAll('.Accesorios');
    let sliderSectionLastAccesorios = sliderSectionAccesorios[sliderSectionAccesorios.length -1];
    sliderAccesorios.style.marginLeft = '0rem';
    sliderAccesorios.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderAccesorios.style.transition = 'none';
        sliderAccesorios.insertAdjacentElement("afterbegin", sliderSectionLastAccesorios);
        sliderAccesorios.style.marginLeft = '-12rem';
        
    }, 500);
}//fin
//Funciones para responsive de 870px
function nextAccesoriosResponsive2() {
    let sliderSectionFirstAccesorios = document.querySelectorAll('.Accesorios')[0];
    sliderAccesorios.style.marginLeft = '-30rem';
    sliderAccesorios.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderAccesorios.style.transition = 'none';
        sliderAccesorios.insertAdjacentElement("beforeend", sliderSectionFirstAccesorios);
        sliderAccesorios.style.marginLeft = '-15rem';
        
    }, 500);
}
function prevAccesoriosResponsive2() {
    let sliderSectionAccesorios = document.querySelectorAll('.Accesorios');
    let sliderSectionLastAccesorios = sliderSectionAccesorios[sliderSectionAccesorios.length -1];
    sliderAccesorios.style.marginLeft = '0rem';
    sliderAccesorios.style.transition = 'all 0.5s';
    setTimeout(function(){
        sliderAccesorios.style.transition = 'none';
        sliderAccesorios.insertAdjacentElement("afterbegin", sliderSectionLastAccesorios);
        sliderAccesorios.style.marginLeft = '-15rem';
        
    }, 500);
}//fin

btnRightAccesorios.addEventListener('click', function(){
    nextAccesorios();
});
btnLeftAccesorios.addEventListener('click', function(){
    prevAccesorios();
});

//Funciones de botones para responsive de 560px
btnRightAccesorios.addEventListener('click', function(){
    // nextAccesoriosResponsive();
});
btnLeftAccesorios.addEventListener('click', function(){
    // prevAccesoriosResponsive();
});//fin

//Funciones de botones para responsive de 560px
btnRightAccesorios.addEventListener('click', function(){
    // nextAccesoriosResponsive2();
});
btnLeftAccesorios.addEventListener('click', function(){
    // prevAccesoriosResponsive2();
});//fin

// setInterval(function(){
//     nextCelulares()
// },10000);
// setInterval(function(){
//     nextTabletas()
// },11000);
// setInterval(function(){
//     nextAccesorios()
// },12000);

//LINEAS PARA FUNCIONAMIENTO DE MENU HAMBURGUESA
const todo = document.getElementById('todo');
const bar = document.getElementById('check');
const nav = document.getElementById('nav');
const li1 = nav.getElementsByTagName('li')[0];
const li2 = nav.getElementsByTagName('li')[1];
const li3 = nav.getElementsByTagName('li')[2];
bar.addEventListener('click', () => {
    nav.style = 'right: 0';
});
li1.addEventListener('click', () => {
    nav.style = 'right: -200%';
});
li2.addEventListener('click', () => {
    nav.style = 'right: -200%';
});
li3.addEventListener('click', () => {
    nav.style = 'right: -200%';
});

var openClose;
const filtro = document.getElementById('filtrar-icon');
const divFiltro = document.getElementById('div-filtro-parametros');

function clickOpen() {
        divFiltro.style.display = 'block';
        openClose = false;
}
function clickClose() {
        divFiltro.style.display = 'none';
        openClose = true;
}
function OCF() {
    filtro.addEventListener('click', () => {
        clickOpen();
        filtro.addEventListener('click', () => {
            clickClose();
        })
    })
}
OCF();
