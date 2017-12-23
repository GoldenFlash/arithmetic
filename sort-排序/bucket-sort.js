function bucket(arr,maxNum){
	var obj = initBucket(maxNum);
	var newArr = [];
	arr.forEach(function(item){
		if(obj[item]){
			obj[item]++;
		}else{
			obj[item] = 1;
		};
	});
	for(var key in obj){
		var length = obj[key];
		for(var i=0;i<length;i++){
			newArr.push(key);
		};
	};
	return newArr;
};
function initBucket(maxNum){
	var bucket = {};
	for(var i=0;i<maxNum;i++){
		bucket[i] = 0
	}
	return bucket;
}
console.log(bucket([3,3,4,1,6,6,8,6],10));