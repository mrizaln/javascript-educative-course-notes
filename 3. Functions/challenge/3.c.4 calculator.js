// create a funcion that can calculate arithmetic operations

function calculate(x, op, y) {
    switch (op) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        default: return null;
    }
}

console.log(calculate(21, '+', 53));
console.log(calculate(21, 'k', 53));