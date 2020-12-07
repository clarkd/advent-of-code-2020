const input = require('./input');
const data = input.trim().split('\n');

const search = (str, left, right, min, max) => {
    if(min === max) return min;

    const char = str[0];
    const mid = Math.floor(((max - min) / 2) + min);
    if(char === left) {
        return search(str.slice(1), left, right, min, mid);
    } else if (char === right) {
        return search(str.slice(1), left, right, mid + 1, max);
    }
}

const genIds = (data) => {
    return data.map(str => {
        const row = str.substring(0, 7);
        const col = str.substring(7);
        const rowNum = search(row, 'F', 'B', 0, 127);
        const colNum = search(col, 'L', 'R', 0, 7);
        return rowNum * 8 + colNum;
    });
}

const part1 = () => {
    console.log("=== Day 5: Part 1 ===");  
    const ids = genIds(data);
    console.log(Math.max(...ids));
};

const part2 = () => {
    console.log("=== Day 5: Part 2 ===");   
    const ids = genIds(data).sort();    

    console.log(ids.find((seat,i) => ids[i+1]-seat > 1) + 1);
}

part1();
part2();