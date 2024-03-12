interface HeightChangeEmitter{
    heightUpdateCallbacks: (newHeight : number) => void[];
}
export default HeightChangeEmitter;
