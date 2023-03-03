import Trabajo1 from "../../assets/laravel.jpeg";
import Trabajo2 from "../../assets/8puzzle.png";
import Trabajo3 from "../../assets/8reinas.jpg";
import Trabajo4 from "../../assets/tiendaWeb.jpg";
import Trabajo5 from "../../assets/c.png";
import Trabajo6 from "../../assets/javaWeb.jpg";
import Trabajo7 from "../../assets/angular.png";
import Trabajo8 from "../../assets/compras.jpg";

export const projectsData = [
    {
        id: 1,
        image: Trabajo1,
        title: "Sistema de inventario Laravel",
        category: "Web",
        url: "https://github.com/Ludwing08/InventarioHGPT",
        descripcion: "Sistema de inventario desarrollado con Laravel enfocado a la información " +
        "sobre equipos informáticos.",
    },
    {
        id: 2,
        image: Trabajo2,
        title: "Algoritmo A* 8puzzle Java",
        category: "Desktop",
        url: "https://github.com/AlexJmzc/8Puzzle",
        descripcion: "Sistema desarrollado en Java que resuelve el juego 8-Puzzle mediante el " + 
        "algoritmo A*.",
    },
    {
        id: 3,
        image: Trabajo3,
        title: "Algoritmo genético 8reinas Java",
        category: "Desktop",
        url: "https://github.com/AlexJmzc/8Reinas",
        descripcion: "Sistema desarrollado en Java que resuelve el juego 8-Reinas mediante un " + 
        "algoritmo genético.",
    },
    {
        id: 4,
        image: Trabajo4,
        title: "Tienda virtual",
        category: "Web",
        url: "https://github.com/Anthony-svg/Webapp",
        descripcion: "Tienda web desarollada con HTML, CSS y JS enfocada a la venta de artículos " + 
        "de computación.",
    },
    {
        id: 5,
        image: Trabajo5,
        title: "Alarma comunitaria C#",
        category: "Desktop",
        url: "https://github.com/AlexJmzc/ProyectoDistribuidas",
        descripcion: "Sistema desarrollado en C# que simula una alarma comunitaria.",
    },
    {
        id: 6,
        image: Trabajo6,
        title: "Gestor de estudiantes Java Web",
        category: "Web",
        url: "https://github.com/AlexJmzc/WebCV",
        descripcion: "Sistema desarrollado con Java Web que realiza el CRUD básico de " + 
        "estudiantes.",
    },
    {
        id: 7,
        image: Trabajo7,
        title: "Gestor de eventos académicos Angular",
        category: "Web",
        url: "https://github.com/Exayfer12/cursosFISEI",
        descripcion: "Sistema desarrollado con Angular que permite la venta de cursos, gestión " + 
        "de la parte administrativa y generación de certificados.",
    },
    {
        id: 8,
        image: Trabajo8,
        title: "Sistema de compras móvil",
        category: "Mobile",
        url: "https://github.com/AlexJmzc/ProyectoDistribuidas",
        descripcion: "Sistema desarrollado en C# que simula la compra de artículos de " + 
        "supermercado desde un smartphone.",
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