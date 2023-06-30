
let input = [1, 3, 2, 2, -4, -6, -2, 8]

function findSubsets(subset, nums, output, index){

	if (index == nums.length) {
		subset.push(output);
		return;
	}
	findSubsets(subset, nums, [...output], index + 1);

	output.push(nums[index]);
	findSubsets(subset, nums, [...output], index + 1);
}



let subset=[];
findSubsets(subset,input, [],0)


let arr = []
let k = 4
	for(i=0;i<subset.length;i++){
	  if(subset[i].length === 2){
	    let sum = subset[i][0]+subset[i][1]
	    if(sum === k){
	      arr.push(subset[i])
	    }
	  }
	}
	
	
// 	console.log(arr)
	
	let arr1d = [].concat(...arr);
	arr1d = arr1d.sort((a,b)=>a-b)
	
	let final = []
	findSubsets(final, arr1d, [], 0)
	
	let final2 = []
	
	for(i=0;i<final.length;i++){
	  let sum = final[i].reduce((a,b)=>a+b,0)
	  if(sum === 8){
	    final2.push(final[i])
	  }
	  
	}
	console.log(final2)