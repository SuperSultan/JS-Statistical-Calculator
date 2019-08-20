
function calcSum(array) {
	if (array.length === 0) return 0;
	var sum=0;
	for(var i=0; i<array.length; i++) {
		sum += Number(array[i]);	
	}
	return sum.toFixed(2);
}


function performStatistics() {	
	var input_string = document.getElementById("input").value;
	var new_string = input_string.replace(/\s+/g, ' ').trim();
	var array = new_string.split(" ");
	for (var i=0; i<array.length; i++) {
		if ((!isNaN(array[i])) && (array.length > 4 && array.length < 21)) {
			array[i] = Number(array[i]);
			if (array[i] > 0 && array[i] < 101) 
				continue;		
		}
		else {
			alert("Error: Please enter a series of  5 to 20 numbers ranging in value between 0 and 100 separated by spaces.");
			return false;
		}	
	}
	
	document.getElementById("max").value = findMax(array).toString();
 	document.getElementById("mean").value = calcMean(array).toString();
	document.getElementById("median").value = calcMedian(array).toString();
	document.getElementById("min").value = findMin(array).toString();
	document.getElementById("std").value = calcStd(array).toString();
	document.getElementById("sum").value = calcSum(array).toString();
	document.getElementById("variance").value = calcVariance(array).toString();
	document.getElementById("mode").value = calcMode(array);	
	event.preventDefault();
	return false;
}

function findMax(array) {
	if (array.length === 0) return 0;
	var max = 0;
	for(var i=0; i<array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max.toFixed(2);
}

function findMin(array) {
	if (array.length === 0) return 0;
	var min = array[0];
	for(var i=0; i<array.length; i++) {
		if (array[i] < min) 
			array[i] = min;		
	}
	return min.toFixed(2);
}

function calcMean(array) {
	var mean = 0;
	var sum = calcSum(array);
	mean = sum / array.length;
	return mean.toFixed(2);
}

function calcMedian(array) {
	if (array.length === 0) 
		return 0;

	array.sort(function(a,b){return a-b;});
	var half = Math.floor(array.length / 2);
	if (array.length %2) 
		return array[half].toFixed(2);
	
	return ((array[half-1] + array[half]) / 2.0).toFixed(2);
}

function calcMode(array) {
	array.sort();
	var freqs = {};
	for (var i=0; i<array.length; i++) {
		var num = array[i];
		freqs[num] = freqs[num] ? freqs[num] + 1 : 1;
		}
	

	const modes =  Object.keys(freqs).filter(x => {
				return freqs[x] == Math.max.apply(null,
				Object.values(freqs));
		});
		
	return modes.join(" ");

}

function calcVariance(array) {
	var differences = 0;
	var mean = calcMean(array);
	array.forEach(function(num) {
		differences += Math.pow((num - mean), 2)
	});
	var variance = differences / array.length;
	return variance.toFixed(2);
}

function calcStd(array) {
	var variance = calcVariance(array);
	var std = Math.sqrt(variance);
	return std.toFixed(2);
}

performStatistics();
