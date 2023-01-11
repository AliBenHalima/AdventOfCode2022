import { readFileSync } from 'fs';
import{parse,solve} from './days/day5_1';
const file = readFileSync('./inputs/day5.txt', 'utf-8');
const parsedInput = parse(file);
console.log(solve(parsedInput));

