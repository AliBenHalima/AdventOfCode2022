import { readFileSync } from 'fs';
import{parse,solve} from './days/day2_2_solution2';
const file = readFileSync('./inputs/day2.txt', 'utf-8');
const parsedInput = parse(file);
console.log(solve(parsedInput));

