const input = require('./input');
const data = input.trim().split('\n');

const navigate = ([x, y]) => {
    const trees = data.filter((row, idx) => {
        const posY = idx * y;
        const posX = (idx * x) % row.length;
        return data.length > posY && (data[posY])[posX] === '#';
    });
    return trees.length;
};

const part1 = () => {
    console.log("=== Day 3: Part 1 ===");
    console.log(navigate([3, 1]));
};

const part2 = () => {
    console.log("=== Day 3: Part 2 ===");
    const routes = [[1,1], [3,1], [5,1], [7,1], [1,2]];
    const total = routes.reduce((sum, route) => sum * navigate(route), 1);
    console.log(total);
}

part1();
part2();