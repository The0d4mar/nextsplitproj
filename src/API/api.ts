 function getRandomBrightColor(): string {
        const hue = Math.floor(Math.random() * 300);
        const saturation = 70 + Math.random() * 30;
        const lightness = 40 + Math.random() * 30;   
        return `hsl(${hue}, ${80}%, ${50}%)`;
}

export function returnColorArray(len:number) : string[]{

    const colorIncrementIndexArray:string[] = []

    let numberOfColor = 0

    while(numberOfColor < len){
        const color:string = getRandomBrightColor();
        if(colorIncrementIndexArray.indexOf(color) == -1){
            colorIncrementIndexArray.push(color)
            numberOfColor+=1
        }
    }

    return colorIncrementIndexArray;

}