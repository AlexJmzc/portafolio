/* WORK 1 */
import Work1 from "../../assets/Inventory/laravel.jpeg";
import Work1_1 from "../../assets/Inventory/Inventory1.png";
import Work1_2 from "../../assets/Inventory/Inventory2.png";
import Work1_3 from "../../assets/Inventory/Inventory3.png";
import Work1_4 from "../../assets/Inventory/Inventory4.png";
import Work1_5 from "../../assets/Inventory/Inventory5.png";
import Work1_6 from "../../assets/Inventory/Inventory6.png";
import Work1_7 from "../../assets/Inventory/Inventory7.png";
import Work1_8 from "../../assets/Inventory/Inventory8.png";
import Work1_9 from "../../assets/Inventory/Inventory9.png";
import Work1_10 from "../../assets/Inventory/Inventory10.png";
import Work1_11 from "../../assets/Inventory/Inventory11.png";
import Work1_12 from "../../assets/Inventory/Inventory12.png";
import Work1_13 from "../../assets/Inventory/Inventory13.png";
import Work1_14 from "../../assets/Inventory/Inventory14.png";
import Work1_15 from "../../assets/Inventory/Inventory15.png";
import Work1_16 from "../../assets/Inventory/Inventory16.png";

/* WORK 2 */
import Work2 from "../../assets/A/8puzzle.png";
import Work2_1 from "../../assets/A/Estrella1.png";
import Work2_2 from "../../assets/A/Estrella2.png";
import Work2_3 from "../../assets/A/Estrella3.png";
import Work2_4 from "../../assets/A/Estrella4.png";
import Work2_5 from "../../assets/A/Estrella5.png";

/* WORK 3 */
import Work3 from "../../assets/Geneticos/8reinas.jpg";
import Work3_1 from "../../assets/Geneticos/Genetico1.png";
import Work3_2 from "../../assets/Geneticos/Genetico2.png";
import Work3_3 from "../../assets/Geneticos/Genetico3.png";
import Work3_4 from "../../assets/Geneticos/Genetico4.png";
import Work3_5 from "../../assets/Geneticos/Genetico5.png";
import Work3_6 from "../../assets/Geneticos/Genetico6.png";
import Work3_7 from "../../assets/Geneticos/Genetico7.png";
import Work3_8 from "../../assets/Geneticos/Genetico8.png";

/* WORK 4 */
import Work4 from "../../assets/Webapp/tiendaWeb.jpg";
import Work4_1 from "../../assets/Webapp/Webapp1.png";
import Work4_2 from "../../assets/Webapp/Webapp2.png";
import Work4_3 from "../../assets/Webapp/Webapp3.png";
import Work4_4 from "../../assets/Webapp/Webapp4.png";
import Work4_5 from "../../assets/Webapp/Webapp5.png";
import Work4_6 from "../../assets/Webapp/Webapp6.png";
import Work4_7 from "../../assets/Webapp/Webapp7.png";
import Work4_8 from "../../assets/Webapp/Webapp8.png";
import Work4_9 from "../../assets/Webapp/Webapp9.png";
import Work4_10 from "../../assets/Webapp/Webapp10.png";
import Work4_11 from "../../assets/Webapp/Webapp11.png";

/* WORK 5 */
import Work5 from "../../assets/WebStore/Food.jpg";
import Work5_1 from "../../assets/WebStore/WebStore1.png";
import Work5_2 from "../../assets/WebStore/WebStore2.png";
import Work5_3 from "../../assets/WebStore/WebStore3.png";
import Work5_4 from "../../assets/WebStore/WebStore4.png";
import Work5_5 from "../../assets/WebStore/WebStore5.png";
import Work5_6 from "../../assets/WebStore/WebStore6.png";
import Work5_7 from "../../assets/WebStore/WebStore7.png";
import Work5_8 from "../../assets/WebStore/WebStore8.png";
import Work5_9 from "../../assets/WebStore/WebStore9.png";

/* WORK 6 */
import Work6 from "../../assets/COC/coc.jpg";
import Work6_1 from "../../assets/COC/COC.png";

/* WORK 7 */
import Work7 from "../../assets/Flappy/flappy.jpg";
import Work7_1 from "../../assets/Flappy/Flappy1.png";
import Work7_2 from "../../assets/Flappy/Flappy2.png";

/* WORK 8 */
import Work8 from "../../assets/portfolio.png";

/* WORK 9 */
import Work9 from "../../assets/CW/CW.png";
import Work9_1 from "../../assets/CW/CW1.png";

/* WORK 10 */
import Work10 from "../../assets/JS/JS.png";
import Work10_1 from "../../assets/JS/JS1.jpg";

/* WORK 11 */
import Work11 from "../../assets/Angular/Angular.jpg";
import Work11_1 from "../../assets/Angular/Angular1.jpg";

/* WORK 12 */
import Work12 from "../../assets/Crud/CRUD.jpeg";
import Work12_1 from "../../assets/Crud/Crud1.png";

/* WORK 13 */
import Work13 from "../../assets/Python/Logo.webp"; 
import Work13_1 from "../../assets/Python/Python1.jpg";

export const titles = {
    title: 'Portfolio',
    subtitle: 'My Works'
}

export const titulos = {
    title: 'Portafolio',
    subtitle: 'Mis Trabajos'
}

export const projectsData = [
    {
        projectID: 1,
        image: Work1,
        images: [Work1_1, Work1_2, Work1_3, Work1_4, Work1_5, Work1_6, Work1_7, Work1_8, Work1_9, Work1_10,
                    Work1_11, Work1_12, Work1_13, Work1_14, Work1_15, Work1_16],
        title: "Inventory system on Laravel",
        category: "Web",
        url: "https://github.com/AlexJmzc/inventory",
        descripcion: "Inventory system developed with Laravel, focused on the information on the " +
        "managers, accessories and programs of each computer equipment within a company",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 2,
        image: Work2,
        images: [Work2_1, Work2_2, Work2_3, Work2_4, Work2_5],
        title: "Algorithm A* 8puzzle Java",
        category: "Desktop",
        url: "https://github.com/AlexJmzc/8Puzzle",
        descripcion: "System developed in Java that implements an A* algorithm to solve the 8-puzzle game",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 3,
        image: Work3,
        images: [Work3_1, Work3_2, Work3_3, Work3_4, Work3_5, Work3_6, Work3_7, Work3_8],
        title: "Genetic algorithm 8 Queens Java",
        category: "Desktop",
        url: "https://github.com/AlexJmzc/8Reinas",
        descripcion: "System developed in Java that implements a genetic algorithm to solve " + 
        "the game of the 8 Queens",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 4,
        image: Work4,
        images: [Work4_1, Work4_2, Work4_3, Work4_4, Work4_5, Work4_6, Work4_7, Work4_8,
                    Work4_9, Work4_10, Work4_11],  
        title: "Web Store",
        category: "Web",
        url: "https://github.com/AlexJmzc/Webapp",
        descripcion: "Web store developed with HTML, CSS and JavaScript focused on the sale of " + 
        "computer items online",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 5,
        image: Work5,
        images: [Work5_1, Work5_2, Work5_3, Work5_4, Work5_5, Work5_6, Work5_7, Work5_8, Work5_9],
        title: "Food Web Store",
        category: "Web",
        url: "https://github.com/AlexJmzc/WebStore",
        descripcion: "Responsive Single Page Web Store developed with HTML, CSS and JavaScript that shows the content " + 
        " of a fast food store",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 6,
        image: Work6,
        images: [Work6_1],
        title: "CoC Web",
        category: "Web",
        url: "https://github.com/AlexJmzc/CoCWeb",
        descripcion: "Responsive Single Page Web developed with HTML, CSS and JavaScript that shows content " + 
        "of the mobile game 'Clash of Clans'",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 7,
        image: Work7,
        images: [Work7_1, Work7_2],
        title: "Flappy Bird",
        category: "Web",
        url: "https://github.com/AlexJmzc/FlappyBird",
        descripcion: "Web page that simulates the game named 'Flappy Bird' functioning",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 8,
        image: Work8,
        images: [Work8],
        title: "Portfolio",
        category: "Web",
        url: "https://github.com/AlexJmzc/portafolio",
        descripcion: "Web project developed with React JS that refers to this web portfolio",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 9,
        image: Work9,
        images: [Work9_1],
        title: "CodeWars",
        category: "Other",
        url: "https://github.com/AlexJmzc/CW",
        descripcion: "Repository where I keep my solutions to different CodeWars problems",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 10,
        image: Work10,
        images: [Work10_1],
        title: "JavaScript course",
        category: "Other",
        url: "https://github.com/AlexJmzc/JavaScript",
        descripcion: "Repository where I keep the files and practices that I have developed while "
        + "following a JavaScript course",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 11,
        image: Work11,
        images: [Work11_1],
        title: "Angular",
        category: "Other",
        url: "https://github.com/AlexJmzc/Curso",
        descripcion: "Project developed with Angular in which I put into practice different skills with a " 
        + "didactic purpose, so it is not in the other categories",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 12,
        image: Work12,
        images: [Work12_1],
        title: "CRUD",
        category: "Other",
        url: "https://github.com/AlexJmzc/CRUD",
        descripcion: "Repository where I keep files with examples of a basic CRUD in different languages",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 13,
        image: Work13,
        images: [Work13_1],
        title: "Python",
        category: "Python",
        url: "https://github.com/AlexJmzc/Python",
        descripcion: "Repository where I keep projects developed in Python",
        more: "See more",
        close: "Close"
    }
];

export const proyectosData = [
    {
        projectID: 1,
        image: Work1,
        images: [Work1_1, Work1_2, Work1_3, Work1_4, Work1_5, Work1_6, Work1_7, Work1_8, Work1_9, Work1_10,
            Work1_11, Work1_12, Work1_13, Work1_14, Work1_15, Work1_16],
        title: "Sistema de inventario Laravel",
        category: "Web",
        url: "https://github.com/AlexJmzc/inventory",
        descripcion: "Sistema de inventario desarrollado con Laravel enfocado a la información " +
        "sobre los responsables, accesorios y programas de cada equipo informático dentro de una empresa",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 2,
        image: Work2,
        images: [Work2_1, Work2_2, Work2_3, Work2_4, Work2_5],
        title: "Algoritmo A* 8puzzle Java",
        category: "Escritorio",
        url: "https://github.com/AlexJmzc/8Puzzle",
        descripcion: "Sistema desarrollado en Java que implementa un algoritmo A* para la resolución del " +
        "juego 8-Puzzle",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 3,
        image: Work3,
        images: [Work3_1, Work3_2, Work3_3, Work3_4, Work3_5, Work3_6, Work3_7, Work3_8],
        title: "Algoritmo genético 8reinas Java",
        category: "Escritorio",
        url: "https://github.com/AlexJmzc/8Reinas",
        descripcion: "Sistema desarrollado en Java que implementa un algoritmo genético" + 
        " para resolver el juego de las 8 Reinas",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 4,
        image: Work4,
        images: [Work4_1, Work4_2, Work4_3, Work4_4, Work4_5, Work4_6, Work4_7, Work4_8,
            Work4_9, Work4_10, Work4_11],  
        title: "Tienda virtual",
        category: "Web",
        url: "https://github.com/AlexJmzc/Webapp",
        descripcion: "Tienda web desarollada con HTML, CSS y JS enfocada a la venta de artículos " + 
        "de computación en línea",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 5,
        image: Work5,
        images: [Work5_1, Work5_2, Work5_3, Work5_4, Work5_5, Work5_6, Work5_7, Work5_8, Work5_9],
        title: "Tienda online de comida",
        category: "Web",
        url: "https://github.com/AlexJmzc/WebStore",
        descripcion: "Tienda Web Responsiva Single Page desarrollada con HTML, CSS y JavaScript que " +
        "muestra el contenido de una tienda de comida rápida",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 6,
        image: Work6,
        images: [Work6_1],
        title: "CoC Web",
        category: "Web",
        url: "https://github.com/AlexJmzc/CoCWeb",
        descripcion: "Web Responsiva Single Page desarrollada con HTML, CSS y JavaScript que muestra contenido del juego móvil 'Clash of Clans'",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 7,
        image: Work7,
        images: [Work7_1, Work7_2],
        title: "Flappy Bird",
        category: "Web",
        url: "https://github.com/AlexJmzc/FlappyBird",
        descripcion: "Página web que simula el funcionamiento del juego llamado 'Flappy Bird'",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 8,
        image: Work8,
        images: [Work8],
        title: "Portafolio",
        category: "Web",
        url: "https://github.com/AlexJmzc/portafolio",
        descripcion: "Proyecto web desarrollado con React JS que hace referencia a este portafolio web",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 9,
        image: Work9,
        images: [Work9_1],
        title: "CodeWars",
        category: "Otro",
        url: "https://github.com/AlexJmzc/CW",
        descripcion: "Repositorio en el que guardo mis soluciones a diferentes problemas de CodeWars",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 10,
        image: Work10,
        images: [Work10_1],
        title: "Curso JavaScript",
        category: "Otro",
        url: "https://github.com/AlexJmzc/JavaScript",
        descripcion: "Repositorio en el que guardo los archivos y prácticas que he desarrollado durante "
        + "el seguimiento de un curso de JavaScript",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 11,
        image: Work11,
        images: [Work11_1],
        title: "Angular",
        category: "Otro",
        url: "https://github.com/AlexJmzc/Curso",
        descripcion: "Proyecto desarrollado con Angular en el que pongo en práctica diferentes habilidades " + 
        "con una finalidad didáctica por lo que no está en las otras categorías",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 12,
        image: Work12,
        images: [Work12_1],
        title: "CRUD",
        category: "Otro",
        url: "https://github.com/AlexJmzc/CRUD",
        descripcion: "Repositorio en el que guardo archivos con ejemplos de un CRUD básico en diferentes lenguajes",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 13,
        image: Work13,
        images: [Work13_1],
        title: "Python",
        category: "Python",
        url: "https://github.com/AlexJmzc/Python",
        descripcion: "Repositorio en el que guardo proyectos hechos en Python",
        more: "Ver más",
        close: "Cerrar"
    }
];

export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Web',
    },
    {
        name: 'Desktop',
    }/*,
    {
        name: 'Mobile',
    },*/
    ,{
        name: 'Python'
    }
    ,{
        name: 'Other'
    }
]

export const proyectosNav = [
    {
        name: 'Todos',
    },
    {
        name: 'Web',
    },
    {
        name: 'Escritorio',
    },/*
    {
        name: 'Movil',
    },*/
    ,{
        name: 'Otro'
    }
    ,{
        name: 'Python'
    }
]