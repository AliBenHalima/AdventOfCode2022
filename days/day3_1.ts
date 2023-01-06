const LOWERCASE_STARTING_CODE= 96;
const UPPERCASE_STARTING_CODE= 38;

const parse = (input :string) :string[] =>{
    let lines :Array<string> = input.split("\r\n");
      return lines;
}

const solve = (input: Array<string>) : number => {
    let sum : number = 0;
    input.forEach((item:string)=> {
        const firstCompartment :string = item.substring(0,item.length/2);
        const secondCompartment :string = item.substring(item.length/2);
       const repeatedItems : Set<string> = getRepeatedtypes(firstCompartment, secondCompartment);
       sum += getScore(repeatedItems);
    });
   
    return sum;
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

const getRepeatedtypes = (firstCompartment: string, secondCompartment: string,) : Set<string> => {
    let result : Set<string> = new Set<string>();
    for(let i=0; i<firstCompartment.length; i++){
       if(secondCompartment.includes(firstCompartment[i])){
        let indexInSecondComp :number = secondCompartment.indexOf(firstCompartment[i]);
        result.add(firstCompartment[i])
        secondCompartment = secondCompartment.slice(0, indexInSecondComp) + secondCompartment.slice(indexInSecondComp+1, secondCompartment.length)
       }
    }
    return result;

}

export{parse,solve};