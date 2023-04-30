import chalk from "chalk";
import { answer } from "~/utils";

console.log(`${chalk.green("Hello")}, ${chalk.blue("World")!}`);
console.log(`The answer is ${answer()}`);
