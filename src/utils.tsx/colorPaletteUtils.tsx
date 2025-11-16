import ColorThief from 'colorthief';

const colorthief = new ColorThief()

export function getColorPalette(imgId: string){
    let imgElement = document.getElementById(imgId) as HTMLImageElement

    if (imgElement){
        let palette = colorthief.getPalette(imgElement, 4)
        console.log(palette)
        return palette
    }
}
