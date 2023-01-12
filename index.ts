import { readFileSync } from 'fs';
import{parse,solve} from './days/day6_2';
const file = readFileSync('./inputs/day6.txt', 'utf-8');
const parsedInput = parse(file);
console.log(solve(parsedInput));

