const rutaImagen = '/img/burbujas.png';

const numeroDeImagenes = 20;

const anchoVentana = window.innerWidth;
const altoVentana = window.innerHeight;

function numeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < numeroDeImagenes; i++) {
    const img = document.createElement('img');
    img.src = rutaImagen;
    img.classList.add('imagen');
    img.style.left = `${numeroAleatorio(0, anchoVentana  -70)}px`;
    img.style.top = `${numeroAleatorio(0, altoVentana  +600)}px`;

    document.body.appendChild(img);
}

const dropdown = document.getElementById('options');
const dynamicContent = document.getElementById('gmes-inf');

const content = {
    Fornite: `
                    <section id="img-g"><img id="img-game" src="/img/fornite.jpg" height="180cqmax" width="60%"></section>
                    <h2>Fortnite</h2>
                    <p id="state-game">Este videojuego que nose como podria catalogar, fue el juego que de infante <br>
                        añoraba jugarlo, ¿Que que es?, este es un videojuego de disparos, que salio por hay del 2017, <br>
                        donde hasta hoy 2024 y en un futuro 2025 se seguira actualizando y mientras eso pasa seguire<br>
                        presente y  puedes unirte conmigo, eso si respondo, seguro. <br></p>
                        <h2 class="status-g">Este es mi Nick: Tycompa</h2>
                        <h2 class="status-g">Tiempo jugado: Cap.3 temp.3</h2>
                        <h2 class="status-g">Habilidad: Falta de manos</h2>
                        <h2 class="status-g">Estrategia: 0</h2>
                        <h2 class="status-g">Derrota: Segura</h2>
                        <h2 class="status-g">Apoyo: Ninguno</h2>
                </section>
                <style>
                .third{
                    background-image: url(/img/fornitechar.png) ;
                    background-repeat: no-repeat;
                    background-size: 20%;
                    }
                </styles>
    `,
    Pvz: `
                    <section id="img-g"><img id="img-game" src="/img/pvz.jpg" height="180cqmax" width="60%"></section>
                    <h2 id="name-g">Plans vs Zombies</h2>
                    <p id="state-game"> El Plantas vs Zombies un videojuego bastante viejo,pero envejecio de la mejor<br>
                    manera aun hoy en dia lo siguen explotando, en si el juego base no es tan <br>
                    relevante, pero a este estan los mods unas locuras de mods que hacen sentir una experiencia <br>
                    aunque nueva no tan duiferente, pero eso lo sigue <br>
                    haciendo una leyenda, bye.</p>
                        <h2 class="status-g">Este es mi Nick: Angel</h2>
                        <h2 class="status-g">Tiempo jugado: No tengo idea</h2>
                        <h2 class="status-g">Habilidad: Buena</h2>
                        <h2 class="status-g">Estrategia: 70 pts</h2>
                        <h2 class="status-g">Derrota: Baja</h2>
                        <h2 class="status-g">Apoyo: No hay</h2>
                </section>
                </section>
                <style>
                .third{
                    background-image: url(/img/guisante.png) ;
                    background-repeat: no-repeat;
                    background-position:  right;
                    background-size: 20%;
                    }
                </styles>
    `,
    L4D2: `
                    <section id="img-g"><img id="img-game" src="/img/Leaft44D2.jpg" height="180cqmax" width="60%"></section>
                    <h2>Leaft 4 Dead 2</h2>
                    <p id="state-game"> Leaft 4 Dead 2, no mucho que decir, videojuego iconico, entretenido, curioso y 
                    facil <br> de entender, este juego es una de las joyas que se pueden encontrar <br>
                    por las Store de videojuegos, si en las Store, no esta gratis pero el punto <br>
                    bueno es que esta a un precio bastante bajo, pero claro que tambien esta la <br>
                    opcion "gratuita"(pirata), que salva a muchos de probar el game.</p>
                        <h2 class="status-g">Este es mi Nick: XAngelitoX</h2>
                        <h2 class="status-g">Tiempo jugado: 2 años</h2>
                        <h2 class="status-g">Habilidad: Decente</h2>
                        <h2 class="status-g">Estrategia: -10</h2>
                        <h2 class="status-g">Derrota: Intermedia</h2>
                        <h2 class="status-g">Apoyo: A tu servicio</h2>
                </section>
                <style>
                .third{
                    background-image: url(/img/logo-leaft.png) ;
                    background-repeat: no-repeat;
                    background-position:  leaft;
                }
                </styles>
    `,
    Roblox: `
                    <section id="img-g"><img id="img-game" src="/img/roblox.jpg" height="180cqmax" width="60%"></section>
                    <h2>Roblox</h2>
                    <p id="state-game"> vamos con un titulo bastante jugado, el Roblox, este noes un videojuego en si, es una <br>
                    plataforma donde uno puede seleccionar la infinidad de minijuegos dentro de la plataforma,<br> algunos
                    entretenidos, otros indeseables y otros que no tendras ni idea de que son, pero fuera de eso <br> 
                    es para<br> pasar el tiempo y puedes encontrar un minijuego interesante.</p>
                        <h2 class="status-g">Este es mi Nick: PowerfireJA</h2>
                        <h2 class="status-g">Tiempo jugado: No tengo ni idea</h2>
                        <h2 class="status-g">Habilidad: Super facil</h2>
                        <h2 class="status-g">Estrategia: -100</h2>
                        <h2 class="status-g">Derrota: No</h2>
                        <h2 class="status-g">Apoyo: Claro</h2>
                </section>
                </section>
                <style>
                .third{
                background-image: url(/img/char-roblox.png) ;
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: 40%;
                }
                </style>
    `,
    Brawl: `
                    <section id="img-g"><img id="img-game" src="/img/brawl.jpg" height="180cqmax" width="60%"></section>
                    <h2>Brawl Stars</h2>
                    <p id="state-game"> Juego movil increible¡, o eso diria si no tuviera sus grandes problemas que no se han <br>
                    solucionado este juego es bastante entretenido, con una actividad alta y actualizaciones <br>
                    atractivas, con mecanicas de juego variadas, una variedad de personajes y aspectos. Aunque sus<br>
                    problemas son las recompensas que dan in game son limitadas, los eventos<br>
                    dejan mucho que desear, y el emparejamiento es pesimo.</p>
                        <h2 class="status-g">Este es mi Nick: thebroder</h2>
                        <h2 class="status-g">Tiempo jugado: 3 años</h2>
                        <h2 class="status-g">Habilidad: Sin rango</h2>
                        <h2 class="status-g">Estrategia: 65 pts.</h2>
                        <h2 class="status-g">Derrota: Intermedia</h2>
                        <h2 class="status-g">Apoyo: Bastante</h2>
                </section>
                <style>
                .third{
                background-image: url(/img/coap.png) ;
            background-repeat: no-repeat;
            background-position: right;
            background-size: 25%;
                }
                </style>
    `,
    CoC: `
                    <section id="img-g"><img id="img-game" src="/img/coc.jpg" height="180cqmax" width="60%"></section>
                    <h2>Clash of Clans</h2>
                    <p id="state-game"> Juego de movil, Clash of Clans es el juego perfecto, eso si no tuviera sus <br>
                    problematicas, como en muchos juegos, tiene actualñizaciones activas, eventos <br>interesantes, 
                    recompesas moderadas, una jugabilidad facil de entender, variedad de <br>
                    personajes, competitivo activo, multiples mecanicas. pero haciendo de lado esto es un juego<br> que requiere mucho tiempo, pero mucho tiempo.<br></p>
                        <h2 class="status-g">Este es mi Nick: Angel</h2>
                        <h2 class="status-g">Tiempo jugado: 5 años</h2>
                        <h2 class="status-g">Habilidad: Avanzada</h2>
                        <h2 class="status-g">Estrategia: 95 pts. </h2>
                        <h2 class="status-g">Derrota: Muy baja </h2>
                        <h2 class="status-g">Apoyo: Si    </h2>
                </section>
                <style>
                .third{
                background-image: url(/img/logCoc.png) ;
                    background-repeat: no-repeat;
                    background-position:  right;
                }
                </style>
    `
};

dropdown.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    dynamicContent.innerHTML = content[selectedOption];
    dynamicContent.classList.add('fade-in');
    setTimeout(() => {
        dynamicContent.classList.remove('fade-in');
    }, 500);
});
