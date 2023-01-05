import { hasUncaughtExceptionCaptureCallback } from "process";

let resultPicks :Map<string,string> = new Map<string, string>([
    ["X", "lose"],
    ["Y", "draw"],
    ["Z", "win"]
]);

let enemyPicks :Map<string,string> = new Map<string, string>([
    ["A", "R"],
    ["B", "P"],
    ["C", "S"]
]);

let picksScore :Map<string,number> = new Map<string, number>([
    ["X", 1],
    ["Y", 2],
    ["Z", 3]
]);

let enemyScore :Map<string,number> = new Map<string, number>([
    ["A", 1],
    ["B", 2],
    ["C", 3]
]);

const parse = (input :string) :string[] =>{
    let games :Array<string> =input.split("\r\n");
      return games.map((game :string) => game.replace(/\s/g, ''))
}

const solve = (input: Array<string>) : number => {
    let sum:number = 0;
   
    input.forEach((e:string)=>{
        const [opponent, mypick] = e.split('') as [string,string];
        sum += getWinner(mypick, opponent);
       })
    return sum;
}       

const getScore = (score:number, pickScore:number): number =>{
    return score + pickScore;
}

const getWinner = (expectedResult:string, opponent:string) : number =>{
    let result:number;
         if((enemyPicks.get(opponent) == "R") && resultPicks.get(expectedResult) == "win") result = getScore(6, picksScore.get("Y") as number) 
      else if ((enemyPicks.get(opponent) == "R") && resultPicks.get(expectedResult) == "lose") result = getScore(0, picksScore.get("Z") as number) 
      else if ((enemyPicks.get(opponent) == "P") && resultPicks.get(expectedResult) == "win") result = getScore(6, picksScore.get("Z") as number) 
      else if ((enemyPicks.get(opponent) == "P") && resultPicks.get(expectedResult) == "lose") result = getScore(0, picksScore.get("X") as number) 
      else if ((enemyPicks.get(opponent) == "S") && resultPicks.get(expectedResult) == "win") result = getScore(6, picksScore.get("X") as number) 
      else if ((enemyPicks.get(opponent) == "S") && resultPicks.get(expectedResult) == "lose") result = getScore(0, picksScore.get("Y") as number) 
      else if ((resultPicks.get(expectedResult)== "draw")) result = getScore(3, enemyScore.get(opponent) as number) 
      else throw new Error('Wrong Picks');   

   return result;
}


export{parse,solve};