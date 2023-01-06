import { readFileSync } from 'fs';
import{parse,solve} from './days/day4_2';
const file = readFileSync('./inputs/day4.txt', 'utf-8');
const parsedInput = parse(file);
console.log(solve(parsedInput));

