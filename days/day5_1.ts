import { create } from "domain";
import { get } from "http";
const avoidLetters: Array<string> = [" ", "[", "]"];
let i: number = 1;


const getIndex = (index: number): number => {
    return Math.trunc(index / 4) + 1;
}
const parse = (input: string): Array<string> => {
    let lines: any = input.split("\r\n");
    // .map(((pair:string)=> pair.split(/(,|-)/g).filter((section:string)=> section != "-" && section != ",")));
    return lines;
}

const solve = (lines: Array<string>): number => {
    const crates: Map<number, Array<string>> = getCrates(lines);
    const instructions: Array<Array<string>> = getInstructions(lines);
    instructions.forEach((instruction: Array<string>) => {
        const [count, source, destination] = instruction;
        const crate = crates.get(+count)

    });
    return 0;

}

const getCrates = (list: Array<string>): Map<number, Array<string>> => {

    const cratesMap: Map<number, Array<string>> = new Map();
    list.forEach((crateCollection: string, index: number) => {
        if (!crateCollection.includes(avoidLetters[2])) return;
        crateCollection.split('').forEach((crate: string, index: number) => {
            let position: number = getIndex(index);
            if (avoidLetters.includes(crate)) return;
            if (!cratesMap.has(position)) cratesMap.set(position, [])
            //@ts-ignore
            cratesMap.set(position, [...Array.from(cratesMap.get(position)), ...crate.split('')])
        });
    });
    return cratesMap;
}

const getInstructions = (list: Array<string>): Array<Array<string>> => {
    // const instructionsMap: Map<number, Array<number>> = new Map();
    const instructions :Array<Array<string>> = [];
    list.forEach((instructionCollection: string, index: number) => {
        if (!instructionCollection.includes("move")) return;
        instructions.push(instructionCollection.replace(/\D/g,'').split(''));
    //   instructionsMap.set(+instructions[0],[+instructions[1],+instructions[2]])
    });
    return instructions;
}
export { parse, solve };