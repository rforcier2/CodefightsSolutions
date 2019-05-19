ratingThreshold = (threshold, ratings) => {
 let result = [];

  Math.average = function(numArray) {
    var sum = 0;
    for(let eachNum of numArray){
      sum += eachNum;
    }
    return sum / numArray.length;
  }

  for(let each in ratings){
    let currentProRatings = ratings[each],
        currentProIndex = ratings.indexOf(currentProRatings);

    if(Math.average(currentProRatings) < threshold){
      result.push( currentProIndex );
    }

  }

  return result;

}
