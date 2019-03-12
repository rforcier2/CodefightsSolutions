// creates an array of size 'size' and fills with 1s;
createArray = (size) => new Array(size).fill(1);

/* Similar solution:
 *
 * This makes an array with one element of number 1,
 * and multiplies how many by the size given as a parameter:
 *
 *  createArray = (size) => {
 *     var result = [1]*size;
 *     return result;
 *  }
 *
 * One more similar solution:
 *
 * createArray = (size) => {
 *  let result = new Array(size);
 *  result.fill(1);
 *  return result;
 * }
 *
 */
