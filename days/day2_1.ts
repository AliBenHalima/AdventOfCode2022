let myPicks :Map<string,string> = new Map<string, string>([
    ["X", "R"],
    ["Y", "P"],
    ["Z", "S"]
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

const getWinner = (myPick:string, opponent:string) : number =>{
    let result:number;
      if((myPicks.get(myPick) == "R") && enemyPicks.get(opponent) == "P") result = getScore(0, picksScore.get(myPick) as number) 
      else if ((myPicks.get(myPick) == "R") && enemyPicks.get(opponent) == "S") result = getScore(6, picksScore.get(myPick) as number) 
      else if ((myPicks.get(myPick) == "P") && enemyPicks.get(opponent) == "R") result = getScore(6, picksScore.get(myPick) as number) 
      else if ((myPicks.get(myPick) == "P") && enemyPicks.get(opponent) == "S") result = getScore(0, picksScore.get(myPick) as number) 
      else if ((myPicks.get(myPick) == "S") && enemyPicks.get(opponent) == "R") result = getScore(0, picksScore.get(myPick) as number) 
      else if ((myPicks.get(myPick) == "S") && enemyPicks.get(opponent) == "P") result = getScore(6, picksScore.get(myPick) as number) 
      else if ((myPicks.get(myPick) == enemyPicks.get(opponent))) result = getScore(3, picksScore.get(myPick) as number) 
       else throw new Error('Wrong Picks');    
   return result;
}

const getScore = (score:number, pickScore:number): number =>{
    return score + pickScore;
}

export{parse,solve};