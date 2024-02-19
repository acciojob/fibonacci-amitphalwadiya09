function fibonacci(num) {
	if (num <= 0) {
        return "Invalid input. Please provide a positive integer greater than 0.";
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i < num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

module.exports = fibonacci;
