const avoidLetters: Array<string> = [" ", "[", "]"];
let i: number = 1;


const getIndex = (index: number): number => {
    return Math.trunc(index / 4) + 1;
}
const parse = (input: string): Array<string> => {
    return input.split("\r\n");
     
}

const solve = (lines: Array<string>): string => {
    let result: Array<string> = [];
    const crates: Map<number, Array<string>> = getCrates(lines);
    const instructions: Array<Array<string>> = getInstructions(lines);
    instructions.forEach((instruction: Array<string>) => {
        const [count, source, destination] = instruction;
        const crate = crates.get(+source)
         //@ts-ignore
        crates.set(+destination,[...crate.splice(0,+count).reverse(),...crates.get(+destination)]);
       
    });
    new Map([...crates].sort()).forEach((values :Array<string>, index : number )=>{
        if(values.length != 0)
            result.push(values[0]);
    })
    return result.join("");

}

const getCrates = (list: Array<string>): Map<number, Array<string>> => {

    const cratesMap: Map<number, Array<string>> = new Map();
    list.forEach((crateCollection: string, index: number) => {
        if (!crateCollection.includes(avoidLetters[2])) return;
        crateCollection.split('').forEach((crate: string, index: number) => {
            if (avoidLetters.includes(crate)) return;
            let position: number = getIndex(index);
            if (!cratesMap.has(position)) cratesMap.set(position, [])
            //@ts-ignore
            cratesMap.set(position, [...Array.from(cratesMap.get(position)), ...crate.split('')])
        });
    });
    return cratesMap;
}

const getInstructions = (list: Array<string>): Array<Array<string>> => {
    const instructions :Array<Array<string>> = [];
    list.forEach((instructionCollection: string, index: number) => {
        if (!instructionCollection.includes("move")) return;
        //@ts-ignore
       let instructionValues: Array<string> = instructionCollection.split(/(\d+)/g).filter((str:string)=>{
            if(str.match(/^[0-9]+$/)) return str;
        }); 
        instructions.push(instructionValues);
    });
    return instructions;
}
export { parse, solve };