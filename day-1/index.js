const input = require('./input');
const numbers = input.trim().split('\n').map(n => Number.parseInt(n));

const part1 = () => {
    console.log("=== Day 1: Part 1 ===");
    const result = numbers.filter(n => numbers.find(n2 => n+n2 === 2020));
    console.log(`\tNumbers are ${result[0]} and ${result[1]}`);
    console.log(`\tMultiplied are ${result[0] * result[1]}`);
}

const part2 = () => {
    console.log("=== Day 1: Part 2 ===");
    for(const n of numbers)
        for(const n2 of numbers)
            for(const n3 of numbers) {
                if(n+n2+n3 === 2020) {
                    console.log(`\tNumbers are ${n} and ${n2} and ${n3}`);
                    console.log(`\tMultiplied are ${n*n2*n3}`);
                    return 
                }
            }  
}

part1();
part2();