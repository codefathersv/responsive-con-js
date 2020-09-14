const d = document;
const w = window;

/* 

id: el contenido donde se mostrara
medida: el ancho minimo-maximo en que se mostrara el frame
mobile: el contenido que se mostrara en dispositivos moviles
desktop: el contenido que se mostrara en dispositivos de escritorio

*/
export default function responsive(id, medida, mobile, desktop) {

    let breakpoint = w.matchMedia(medida);
    console.log(breakpoint);

    const responsive = (e) => {
        if (e.matches === true) {

            d.getElementById(id).innerHTML = desktop;

        } else {

            d.getElementById(id).innerHTML = mobile;

        }
    }

    breakpoint.addListener(responsive);
    responsive.breakpoint;

}