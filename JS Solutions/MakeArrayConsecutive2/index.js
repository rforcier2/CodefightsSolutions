makeArrayConsecutive2=statues=> {
 let range = statues.sort(function (a, b){return (a - b)});
 let s=0;
 if(range.length-1 === 0){
  return 0;
 }else{
  for(i=0;i<=range.length-2;i++){
   s+=(range[i+1]-range[i]-1);
  }
  return s;
 }
}
