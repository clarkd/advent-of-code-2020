const input = require('./input');
const data = input.trim().split('\n\n').map(g => g.split('\n'));

const part1 = () => {
    console.log("=== Day 6: Part 1 ==="); 

    const total = data.map(group => 
        [...new Set([...group.map(g => g.split('')).flat()])] //lolololol, spicy
    ).reduce((sum, cur) => sum+cur.length, 0);
    
    console.log(total);
};

const part2 = () => {
    console.log("=== Day 6: Part 2 ==="); 

    const total = data.map(group => {
        const people = [...new Set([...group.map(g => g.split(''))])];
        const intersection = people.reduce((a, b) => {
            return a.filter(c => b.includes(c));
        });
        return intersection.length;
    }).reduce((sum, cur) => sum+cur, 0);
  
    console.log(total);
}

part1();
part2();