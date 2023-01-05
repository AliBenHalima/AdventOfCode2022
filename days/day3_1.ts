const parse = (input :string) :string[] =>{
    let lines :Array<string> =input.split("\r\n");
      return lines;
}

const solve = (input: Array<string>) : number => {
    input.forEach((item:string)=> {
        const firstCompartment :string = item.substring(0,item.length/2);
        const secondCompartment :string = item.substring(item.length/2);

    });
   
    return 0;
} 

const getRepeatedtypes = (firstCompartment: string, secondCompartment: string,) : void => {
    let result : Array<string> = [];
    for(let i=0; i<firstCompartment.length; i++){
       if(secondCompartment.includes(firstCompartment[i])){
        result.push(firstCompartment[i])
       }
    }


}

export{parse,solve};