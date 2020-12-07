const input = require('./input');
const data = input.trim().split('\n');

let start = 0;
const passports = data.reduce((list, row) => {
    if(list[start] == undefined) list[start] = {};
    if(row == "") { start++; return list; }
    const parts = row.split(' ').map(d => d.split(':'));
    
    for(const [name, value] of parts) {
        list[start][name] = value;
    }
    return list;
}, []);

const part1 = () => {
    console.log("=== Day 4: Part 1 ===");
    const expected = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; // 'cid'];
    const valid = passports.filter(p => expected.every(e => p.hasOwnProperty(e)));
    console.log(valid.length);    
};

const part2 = () => {
    console.log("=== Day 4: Part 2 ===");
    const expected = {
        'byr': (d) => d.length === 4 && parseInt(d) >= 1920 && parseInt(d) <= 2002,
        'iyr': (d) => d.length === 4 && parseInt(d) >= 2010 && parseInt(d) <= 2020,
        'eyr': (d) => d.length === 4 && parseInt(d) >= 2020 && parseInt(d) <= 2030,
        'hgt': (d) => {
            const match = d.match(/^([0-9]{1,3})(cm|in)$/);
            if(match === null) return false;
            const [_, numStr, unit] = match;
            const num = parseInt(numStr);
            switch(unit) { 
                case 'cm': 
                    return num >= 150 && num <= 193; 
                case 'in': 
                return num >= 59 && num <= 76;
                default: 
                    return false;
                }
        },
        'hcl': (d) => /^#[0-9a-f]{6}$/g.test(d),
        'ecl': (d) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(d),
        'pid': (d) => /^[0-9]{9}$/g.test(d)
    }
    const valid = passports.filter(p => 
        Object.entries(expected).every(([field, test]) => p.hasOwnProperty(field) && test(p[field]) === true)
    );
    console.log(valid.length);   
}

part1();
part2();