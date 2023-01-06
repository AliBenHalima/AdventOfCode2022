const LOWERCASE_STARTING_CODE= 96;
const UPPERCASE_STARTING_CODE= 38;

const parse = (input :string) :string[] =>{
    let lines :Array<string> = input.split("\r\n");
      return lines;
}

const solve = (input: Array<string>) : number => {
    let sum : number = 0;
    let groupList : Array<Array<string>> = [];

    for (let i =0; i< input.length-2; i+=3){
        groupList.push([input[i],input[i+1], input[i+2]]);
    }

    groupList.forEach((group : Array<string>) =>{
        const item1 : Array<string> = group[0].split("");
        const item2 : Set<string> =new Set([...group[1].split("")]);
        const item3 : Set<string> = new Set([...group[2].split("")]);
        const commonValue : string | undefined= item1.find((char:string)=>{
            return item2.has(char) && item3.has(char)
        });
        if (commonValue?.toLowerCase() == commonValue){
            // @ts-ignore
            sum += commonValue?.charCodeAt(0) - LOWERCASE_STARTING_CODE;
        }else if (commonValue?.toUpperCase() == commonValue){
             // @ts-ignore
            sum += commonValue?.charCodeAt(0) - UPPERCASE_STARTING_CODE;
        }
        
    })

    return sum;
} 


export{parse,solve};