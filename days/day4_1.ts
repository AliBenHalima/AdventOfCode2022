const LOWERCASE_STARTING_CODE= 96;
const UPPERCASE_STARTING_CODE= 38;
type StringArray = [string,string,string,string];

const parse = (input :string) :Array<Array<string>> =>{
    let lines :Array<Array<string>>= input.split("\r\n")
    .map(((pair:string)=> pair.split(/(,|-)/g).filter((section:string)=> section != "-" && section != ",")));
      return lines;
}

const solve = (pairs: Array<Array<string>>) : number => {
    let sum: number = 0;
    pairs.forEach((pair:Array<string>)=>{
        // @ts-ignore
    const [firstStartSection, firstEndSection, secondStartSection, secondEndSection] : StringArray = pair;
    if(checkOverlap(+firstStartSection, +firstEndSection, +secondStartSection, +secondEndSection)) sum++;
});
return sum;

} 
const checkOverlap = (firstStartSection:number, firstEndSection:number,secondStartSection:number, secondEndSection:number) : boolean =>{
            if((secondStartSection >= firstStartSection) && (secondEndSection <= firstEndSection)) return true;
            if((firstStartSection >= secondStartSection) && (firstEndSection <= secondEndSection)) return true;
            return false;
            }



export{parse,solve};