const LOWERCASE_STARTING_CODE= 96;
const UPPERCASE_STARTING_CODE= 38;

const parse = (input :string) :string[] =>{
    let lines :Array<string> = input.split("\r\n");
      return lines;
}

const solve = (input: Array<string>) : number => {
    let sum : number = 0;
    for (let i =0; i< input.length-2; i+=3){
        sum += getScore(getItem([input[i],input[i+1], input[i+2]]));
    }
    return sum;
} 

const getItem = (list : Array<string>) :Set<string> =>{
    let sum : number = 0;
    let result : Set<string> = new Set<string>();

    for (let i =0; i< list[0].length; i++){
        if((list[1].includes(list[0][i])) && (list[2].includes(list[0][i]))){
            result.add(list[0][i]);
            break;
        }
    }
    return result;
}

const getScore = (list : Set<string>) :number =>{
    let sum : number = 0;
    list.forEach((item : string)=>{
        if (item.toLowerCase() == item){
            sum += item.charCodeAt(0) - LOWERCASE_STARTING_CODE;
        }else if (item.toUpperCase() == item){
            sum += item.charCodeAt(0) - UPPERCASE_STARTING_CODE;
        }
        else throw Error("wrong Item");
    })
    return sum;
}

export{parse,solve};