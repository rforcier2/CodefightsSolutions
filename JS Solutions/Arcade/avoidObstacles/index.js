const avoidObstacles = inputArray => {
  var minJump = 1;
  // tests whether "some" element in the array passes
  while (inputArray.some( obstacle => obstacle % minJump == 0) ) {
    minJump++;
  }
  return minJump;
}
