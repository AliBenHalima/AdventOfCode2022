
const getIndex = (index: number): number => {
    return Math.trunc(index / 4) + 1;
}

const parse = (input: string): string => {
    return input;
}

const solve = (input: string): number => {
    // const letterMap: Map<number, string> = new Map();
    const letterSet: Set<string> = new Set();
        let result: number = 0;
    for (let i: number = 0; i < input.length-3; i++) {
        letterSet.add(input[i])
        letterSet.add(input[i+1])
        letterSet.add(input[i+2])
        letterSet.add(input[i+3])
        if(letterSet.size == 4) {
            result = i+3+1; // 1 because letters start from index 1
         return result;
        }
        letterSet.clear();
    }
    throw new Error("not found");
}

export { parse, solve };