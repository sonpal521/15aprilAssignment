function heapify(arr){
 
    //Initialize Heap array
    const heap = [];
    
   
    for(let element of arr){
    
      //Push value to end of heap
      heap.push(element);
    
      //If first element do nothing
      if(!heap.length===1) continue;
    
      //Calculating initial n
      let n = heap.length-1;
    
      
      while(n!==0){
    
        //Calculate parent Index
        const parentIndex = Math.floor((n-1)/2);
    
        if( heap[parentIndex]>heap[n]) break ;
    
        //Swap parent with child
        let temp = heap[parentIndex];
        heap[parentIndex] = heap[n];
        heap[n] = temp;
    
        //parent becomes new n
        n = parentIndex
      }
    }
    return heap;
   }
   let arr = [2,7,26,25,19,17,1,90,3,36];
    
   console.log(heapify(arr));
   