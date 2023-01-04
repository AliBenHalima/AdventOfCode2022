let picks :Map<string,number> = new Map<string, number>([
    ["X", 1],
    ["Y", 2],
    ["Z", 3]
]);
let drawPicks :Map<string,string> = new Map<string, string>([
    ["X", "A"],
    ["Y", "B"],
    ["Z", "C"]
]);


const parse = (input :string) :string[][] =>{
    return input.split("\r\n").map(element => element.split(""));
}

const solve = (input: Array<string>) : number => {

    return 0;
}       

const getWinner = (myPick:string, opponent:string) : number =>{
    let result:number;
        if((myPick == "X") && (opponent == "C")){
            result= getScore(6, picks.get(myPick) as number)
        }else if(myPick == drawPicks.get(myPick)){
            result= getScore(3,picks.get(myPick) as number)
        }else{
            result= getScore(0,picks.get(myPick) as number)
        }
        if((myPick == "Y") && (opponent == "A")){
            result= getScore(6, picks.get(myPick) as number)
        }else if(myPick == drawPicks.get(myPick)){
            result= getScore(3,picks.get(myPick) as number)
        }else{
            result= getScore(0,picks.get(myPick) as number)
        }

        if((myPick == "Z") && (opponent == "B")){
            result= getScore(6, picks.get(myPick) as number)
        }else if(myPick == drawPicks.get(myPick)){
            result= getScore(3,picks.get(myPick) as number)
        }else{
            result= getScore(0,picks.get(myPick) as number)
        }
   return result;
}

const getScore = (score:number, pickScore:number): number =>{
    return score + pickScore;
}

export{parse,solve};