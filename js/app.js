import responsive from "./module/responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    responsive(
        "youtube",
        "(min-width: 800px)",
        `<a href="https://www.youtube.com/embed/2SetvwBV-SU" target="_blank">Ver video en YouTube</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsive(
        "maps",
        "(min-width: 800px)",
        `<a href="https://goo.gl/maps/ssT3g9pDwaNZT9qo8" target="_blank">Ver Mapa en Google Maps</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61990.333427048114!2d-89.20772700332013!3d13.815253406160727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633be79926ef01%3A0xa400eac0e14af99b!2sApopa!5e0!3m2!1ses-419!2ssv!4v1600109162471!5m2!1ses-419!2ssv" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );

})