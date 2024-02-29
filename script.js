function fibonacci(num) {
	let a=0,b=1;
	let i=2;
	while(num>=i)
		{
			let c=a+b;
			b=a;
			a=c;
			i++;
		}
	return a;
	
}

module.exports = fibonacci;
