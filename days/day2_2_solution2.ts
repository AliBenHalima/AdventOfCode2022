
type aChoice = "A"|"B"|"C";
type bChoice = "X"|"Y"|"Z";
type gameScore = 0|3|6 ;
type myScore = 1|2|3 ;

const gameRecordMapper : Record<aChoice, Record<bChoice,bChoice>> = {
    A: { X: 'Z', Y: 'X', Z: 'Y' },
	B: { X: 'X', Y: 'Y', Z: 'Z' },
	C: { X: 'Y', Y: 'Z', Z: 'X' },
}
const myScoreMapper : Record<bChoice, myScore> = {
    X:1,
    Y:2,
    Z:3
}

const gameMapper : Record<bChoice, gameScore> = {
    X:0,
    Y:3,
    Z:6
}

const parse = (input :string) :string[] =>{
    let games :Array<string> = input.split("\r\n");
      return games.map((game :string) => game.replace(/\s/g, ''))
}

const solve = (input: Array<string>) : number => {
    let sum:number = 0;
    input.forEach((e:string)=>{
        const [opponent, mypick] = e.split('') as [aChoice,bChoice];
        const shape = gameRecordMapper[opponent][mypick];
        sum += myScoreMapper[shape] + gameMapper[mypick];
       })
    return sum;
}       



export{parse,solve};