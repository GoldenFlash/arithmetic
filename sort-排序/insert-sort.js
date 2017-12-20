var arr = [3,1,4,1,6,5,2]
function sort(arr){
	var newarr = arr
	var temp;
	
		for(var i = 0;i<arr.length;i++){
			temp = arr[i]
			var j = i;
			while(arr[i]<arr[i-1]){
				arr[i] = arr[i-1]
				arr[i-1] = temp
				i--
			}	
			
		}
		
	return arr 
}
sort(arr)
console.log(sort(arr))

