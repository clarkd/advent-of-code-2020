const input = require('./input');
const numbers = input.trim().split('\n');

const part1 = () => {
    console.log("=== Day 2: Part 1 ===");
    const valid = numbers.filter(p => {
        const [policy, password] = p.split(': ');
        const [counts, letter] = policy.split(' ');
        const [min, max] = counts.split('-').map(n => parseInt(n));
        const count = (password.match(new RegExp(`${letter}`, 'g')) || []).length;
        return count >= min && count <= max;
    });

    console.log(valid.length);
};

const part2 = () => {
    console.log("=== Day 2: Part 2 ===");
    const valid = numbers.filter(p => {
        const [policy, password] = p.split(': ');
        const [counts, letter] = policy.split(' ');
        const [pos1, pos2] = counts.split('-').map(n => parseInt(n));
        return password[pos1-1] === letter && password[pos2-1] !== letter
         || password[pos1-1] !== letter && password[pos2-1] == letter;
    });

    console.log(valid.length);
}

part1();
part2();