
const parse = (input: string): string => {
    return input;
}

const solve = (input: string): number => {
    // const letterMap: Map<number, string> = new Map();
    const letterSet: Set<string> = new Set();
        let result: number = 0;
    for (let i: number = 0; i < input.length; i=i+14) {
        for (let j: number = i; j < i+14; j++) {
        letterSet.add(input[i])
        if(letterSet.size == 14) {
            result = j+3+1; // 1 because letters start from index 1
         return result;
        }
        letterSet.clear();
    }
    }
    throw new Error("not found");
}

export { parse, solve };