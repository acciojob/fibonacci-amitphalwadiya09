function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let sum=0;
	for(let i=0;i<num-2;i++)
		{
			c=a+b;
			sum=sum+c;
			a=b;
			b=c;
			
		}
}

module.exports = fibonacci;
