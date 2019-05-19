function priceSuggestion(contractData) {
  let increasing = contractData.sort(function(a, b){return a-b});
  let firstHalf = [],
      secondHalf = [],
      incLength = increasing.length;

  if (incLength < 2){
    return [];
  }

  for(let i = 0; i < Math.floor(incLength / 2); i++){
    firstHalf.push(increasing[i]);
  }

  for(let j = incLength-1; j > Math.floor(incLength / 2) - 1; j--){
    secondHalf.push(increasing[j]);
  }

  secondHalf = secondHalf.sort( (a,b) => a-b )

// Made two separate medians because if the halves are even (no perfect median),
// the first half rounds the median down and the second
// half rounds the median up.
  function firstMedian(values) {
    let half = Math.floor(values.length/2);
    if(values.length % 2)
        return values[half];
    else
        return Math.floor((values[half-1] + values[half]) / 2);
  }

  function secondMedian(values) {
    let half = Math.floor(values.length/2);
    if(values.length % 2)
        return values[half];
    else
        return Math.ceil((values[half-1] + values[half]) / 2);
  }

  return [firstMedian(firstHalf), secondMedian(secondHalf)];
}
