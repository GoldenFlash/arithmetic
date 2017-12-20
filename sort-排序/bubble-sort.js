var arr = [3,11,6,5,4,4,1]
function sort(arr){
	var j = arr.length
	for(var k = 0;k<arr.length;k++){
		for (var i = 0;i<j-1;i++){
			var a = arr[i];
			var b = arr[i+1]
			if(arr[i]>arr[i+1]){
				arr[i] = b;
				arr[i+1] = a;
			}			
		}
		j = j-1;
	}
	return arr;
}
console.log(sort(arr))
console.log(arr)