//1.1
let employees;
employees = [
    [101, "kongpop", "10", "30,000", 0, " ", 0],
    [102, "Jakrit", "5", "18,000", 0, " ", 0],
    [103, "Chalermchai", "2", "13,000", 0, " ", 0],
    [104, "Chawanwit", "1", "10,000", 0, " ", 0],
    [105, "Thanakorn", "9", "25,000", 0, " ", 0]
];
//1.2
employees.forEach(e => {
    e[4] = e[2];
    if (e[4] <= 1) {
        e[4] = 0;
    }
    else if (e[4] >= 2) {
        e[4] = 1;
    }
    else if (e[4] >= 4) {
        e[4] = 2;
    }
    else if (e[4] >= 6) {
        e[4] = 3;
    }
    console.log("===========================");
    console.log(`ID: ${e[0]}`);
    console.log(`Name: ${e[1]}`);
    console.log(`workYear: ${e[2]}`);
    console.log(`salary: ${e[3]}`);
    console.log(`bonus: ${e[4]}`);
    console.log(`gift: ${e[5]}`);
    console.log("===========================");
});
