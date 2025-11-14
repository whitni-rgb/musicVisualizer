import ColorThief from 'colorthief';


export function getProfileColorPalette(image: any){
    ColorThief.getPalette(image, 3).then(palette => {
        console.log( palette );
    })
    .catch(err => {
        console.error("couldn't retrieve color palette")
    })
}
