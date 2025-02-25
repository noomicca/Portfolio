var projectIndex = 0;
const projects = [
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/knee deep atp/miniatira.png`,
            },
            {
                type: `<video
                controls
                src="`,
                endType: `"
            ></video>`,
                src: `imgProjects/knee deep atp/Knee Deep at ATP videoclip.mp4`,
            },
        ],
        date: `Julio, 2023`,
        nombre: `Knee Deep ATP - Videoclip`,
        asignatura: `Fotografía en Medios Audiovisuales`,
        sobre: `Consigna: elaborar una pieza multimedia. En este proyecto me encargué de la creación de contenido multimedia, edición y post producción de un videoclip musical.`,
        id: 0,
    },
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/BUENA VIBRA pared.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/buena vibra poster A3.png`,
            },

            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/1.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/2.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/3.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/4.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/5.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/6.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/7.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/8.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/9.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/10.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/11.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/12.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/13.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/14.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/15.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/16.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/buena vibra/manual gráfico/17.png`,
            },
        ],
        date: `Diciembre, 2024`,
        nombre: `Buena Vibra - Marca Gráfica`,
        asignatura: `Diseño de Identidad Corporativa para web`,
        sobre: `Consigna: desarrollar una identidad de marca para un festival de música.`,
        id: 1,
    },
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/Miranda/miniatura.png`,
            },
            {
                type: `<video controls src="`,
                endType: `"></video>`,
                src: `imgProjects/Miranda/miranda web.mp4`,
            },
        ],
        date: ``,
        nombre: `Miranda! - Website`,
        asignatura: `Programación 1`,
        sobre: `Consigna: diseñar y desarrollar una página web para una banda o cantante a elección.`,
        id: 2,
    },
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/la hoguera de san juan/1.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/la hoguera de san juan/2.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/la hoguera de san juan/3.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/la hoguera de san juan/4.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/la hoguera de san juan/5.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/la hoguera de san juan/6.png`,
            },
        ],
        date: `Diciembre, 2024`,
        nombre: `La Hoguera de San Juan - Marca Gráfica`,
        asignatura: `Diseño de Identidad Corporativa para web`,
        sobre: `Consigna: elegir una festividad uruguaya y desarrollar unaa identidad de marca para posteriormente crear un folleto informativo.`,
        id: 3,
    },
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/0.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/1.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/2.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/3.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/4.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/5.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/6.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/7.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/8.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/9.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/10.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/11.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/12.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/13.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/14.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/15.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/16.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/17.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/18.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/19.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/20.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/21.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/22.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/23.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/24.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/25.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/26.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/27.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/28.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/29.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/30.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/fiestas del uy/manual gráfico/31.png`,
            },
        ],
        date: `Noviembre, 2024`,
        nombre: `Fiestas del Uruguay - Marca Gráfica`,
        asignatura: `Diseño de Identidad Corporativa para web`,
        sobre: `Consigna: desarrollar la identidad de marca de "Fiesstas del Uruguay"`,
        id: 4,
    },
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/caracol.JPG`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/caracol GLITCH.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/edificio.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/edificio INTERV.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/farol.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/farol INTERV.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/gato.JPG`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/gato GLITCH.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/lentes.jpg`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/lentes GLITCH.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/comp alg 1.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/comp alg 2.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/comp alg 3.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/comp alg v2.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/comp alg v3.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/comp alg v4.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/glitch - processing/comp alg v5.png`,
            },
        ],
        date: `Diciembre, 2021`,
        nombre: `Glitch - Experimentación con Processing`,
        asignatura: `Taller de Arte Digital 1`,
        sobre: `Consigna: intervenir fotografías utilizando la técnica de "glitch" y crear composiciones algorítmicas utilizando processing. `,
        id: 5,
    },
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/color palette/Página web.png`,
            },
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/color palette/prototipo.png`,
            },
        ],
        date: ``,
        nombre: `Color Palette - Website`,
        asignatura: `Programación 2`,
        sobre: `Consigna: desarrollar una página web aplicando el uso de APIs. Color Palette toma tres canciones a elección y según sus géneros musicales devuelve una paleta de colores.`,
        id: 6,
    },
    {
        imgs: [
            {
                type: `<img src="`,
                endType: `" alt="" />`,
                src: `imgProjects/lo de lalo/miniatura.png`,
            },
        ],
        date: `2021`,
        nombre: `Lo de Lalo - Website`,
        asignatura: `Diseño Web`,
        sobre: `Consigna: desarrollar una página web para un restaurante.`,
        id: 7,
    },
];
const aboutMe = {
    micName: "Micaela Villamil",
    micDesc:
        "Buenas! Soy estudiante de la Licenciatura en Diseño Multimedia, actualmente cursando mi tercer año, en la Universidad ORT Uruguay.\r\n\r\n Mis trabajos cubren una amplia gama de necesidades, desde diseñar y programar páginas web, grabar y editar piezas audiovisuales o encargos de retratos e ilustraciónes personalizadas, sea lo que necesites, puedo adaptarme rapidamente a nuevos medios.\r\n\r\n Contacto: micaelavillamil200@gmail.com",
    micImg: `<img src="assets/me.jpg" alt="">`,
};

const starterPack = {
    title: "Instrucciones",
    textPC: `Puedes cambiar las imagenes de la cámara con las flechas del teclado, o utilizando "aswd". \r\n\r\n Podés hacer click en los videos para reproducirlos. \r\n\r\n El botón de abajo abre la galería de proyectos. \r\n\r\n ¡Disfrutá tu estadía! `,
    textPhone: `Puedes cambiar las imagenes de la cámara deslizando el dedo sobre las mismas. \r\n\r\n Podés reproducir los videos haciendo click en ellos. \r\n\r\n ¡Disfrutá tu estadía! `,
    videoIntro: `<video controls src="imgProjects/CarpetaAnual2-MicaelaVillamil.mp4"></video>`,
    dateVideo: "24/02/2025",
};
