import Trabajo1 from "../../assets/laravel.jpeg";
import Trabajo2 from "../../assets/8puzzle.png";
import Trabajo2_1 from "../../assets/1.png";
import Trabajo2_2 from "../../assets/2.png";
import Trabajo2_3 from "../../assets/3.png";
import Trabajo2_4 from "../../assets/4.png";
import Trabajo2_5 from "../../assets/5.png";
import Trabajo2_6 from "../../assets/6.png";
import Trabajo3 from "../../assets/8reinas.jpg";
import Trabajo4 from "../../assets/tiendaWeb.jpg";
import Trabajo5 from "../../assets/c.png";
import Trabajo6 from "../../assets/javaWeb.jpg";
import Trabajo7 from "../../assets/angular.png";
import Trabajo8 from "../../assets/compras.jpg";

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
        image: Trabajo1,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Inventory system on Laravel",
        category: "Web",
        url: "https://github.com/Ludwing08/InventarioHGPT",
        descripcion: "Inventory system developed with Laravel, focused on the information on the " +
        "managers, accessories and programs of each computer equipment within a company",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 2,
        image: Trabajo2,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Algorithm A* 8puzzle Java",
        category: "Desktop",
        url: "https://github.com/AlexJmzc/8Puzzle",
        descripcion: "System developed in Java that implements an A* algorithm to solve the 8-puzzle game",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 3,
        image: Trabajo3,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
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
        image: Trabajo4,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Web Store",
        category: "Web",
        url: "https://github.com/Anthony-svg/Webapp",
        descripcion: "Web store developed with HTML, CSS and JavaScript focused on the sale of " + 
        "computer items online",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 5,
        image: Trabajo5,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Alarma comunitaria C#",
        category: "Desktop",
        url: "https://github.com/AlexJmzc/ProyectoDistribuidas",
        descripcion: "Sistema desarrollado en C# que simula una alarma comunitaria.",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 6,
        image: Trabajo6,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Gestor de estudiantes Java Web",
        category: "Web",
        url: "https://github.com/AlexJmzc/WebCV",
        descripcion: "Sistema desarrollado con Java Web que realiza el CRUD básico de " + 
        "estudiantes.",
        more: "See more",
        close: "Close"
    },
    {
        projectID: 7,
        image: Trabajo7,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Gestor de eventos académicos Angular",
        category: "Web",
        url: "https://github.com/Exayfer12/cursosFISEI",
        descripcion: "Sistema desarrollado con Angular que permite la venta de cursos, gestión " + 
        "de la parte administrativa y generación de certificados.",
       
        more: "See more",
        close: "Close"
    },
    {
        projectID: 8,
        image: Trabajo8,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Sistema de compras móvil",
        category: "Mobile",
        url: "https://github.com/AlexJmzc/ProyectoDistribuidas",
        descripcion: "Sistema desarrollado en C# que simula la compra de artículos de " + 
        "supermercado desde un smartphone.",
        more: "See more",
        close: "Close"
    }
];

export const proyectosData = [
    {
        projectID: 1,
        image: Trabajo1,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Sistema de inventario Laravel",
        category: "Web",
        url: "https://github.com/Ludwing08/InventarioHGPT",
        descripcion: "Sistema de inventario desarrollado con Laravel enfocado a la información " +
        "sobre los responsables, accesorios y programas de cada equipo informático dentro de una empresa",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 2,
        image: Trabajo2,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
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
        image: Trabajo3,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
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
        image: Trabajo4,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Tienda virtual",
        category: "Web",
        url: "https://github.com/Anthony-svg/Webapp",
        descripcion: "Tienda web desarollada con HTML, CSS y JS enfocada a la venta de artículos " + 
        "de computación en línea",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 5,
        image: Trabajo5,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Alarma comunitaria C#",
        category: "Escritorio",
        url: "https://github.com/AlexJmzc/ProyectoDistribuidas",
        descripcion: "Sistema desarrollado en C# que simula una alarma comunitaria.",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 6,
        image: Trabajo6,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Gestor de estudiantes Java Web",
        category: "Web",
        url: "https://github.com/AlexJmzc/WebCV",
        descripcion: "Sistema desarrollado con Java Web que realiza el CRUD básico de " + 
        "estudiantes.",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 7,
        image: Trabajo7,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Gestor de eventos académicos Angular",
        category: "Web",
        url: "https://github.com/Exayfer12/cursosFISEI",
        descripcion: "Sistema desarrollado con Angular que permite la venta de cursos, gestión " + 
        "de la parte administrativa y generación de certificados.",
        more: "Ver más",
        close: "Cerrar"
    },
    {
        projectID: 8,
        image: Trabajo8,
        images: [Trabajo2_1, Trabajo2_2, Trabajo2_3, Trabajo2_4, Trabajo2_5, Trabajo2_6],
        title: "Sistema de compras móvil",
        category: "Movil",
        url: "https://github.com/AlexJmzc/ProyectoDistribuidas",
        descripcion: "Sistema desarrollado en C# que simula la compra de artículos de " + 
        "supermercado desde un smartphone.",
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
    },
    {
        name: 'Mobile',
    },
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
    },
    {
        name: 'Movil',
    },
]