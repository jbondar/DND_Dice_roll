// Roll Stats
function rollstats() {
	try {
		var minimum = parseInt(process.argv[2])
		var maximum = parseInt(process.argv[3])
		return helper(minimum,maximum,0);
	}
	catch (err) {
		throw 'Too many iterations. Please try again with a more viable range';
	}
	return null;
}

//Recursive Roll Stats Helper
function helper(minimum,maximum,count) {
	var rollnumber = new Array(6);
	var A = new Array(4);
	var B, i, j;
	for (i = 0; i < 6; i++) {
		//Do the random rolls
		for (j = 0; j < 4; j++) {
			A[j] = Math.floor(Math.random() * 6) + 1;
		}
		//B = sum(A) - min(A)
		B= A.reduce((a,b) => a + b, 0) - Math.min(...A);
		//Store B
		rollnumber[i] = B;
	}

	//Check bounds
	var temp = rollnumber.reduce((a,b) => a + b, 0);
	if (maximum >= temp && temp>=minimum) { //SUCCESS
		return rollnumber
		console.log('Success')
	} else {
		if (count == 1000000) { //FAILURE
			throw "RIP";
		}
	}
	return helper(minimum,maximum,count+1); //RECURSE
}

hey_fucko_heres_your_stats = rollstats(70,85);
console.log(hey_fucko_heres_your_stats.reduce((a,b) => a + b, 0));