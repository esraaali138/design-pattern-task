function* range(intial:number,end:number , step:number){
    let currentVal = intial;
    while (currentVal<=end) {
      yield currentVal;
      currentVal+=step
    }
}
for (const val of range(0, 10, 2)) {
    console.log(val)
	
}


let iterator = range(1, 10, 1);

console.log(iterator.next());