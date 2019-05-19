function questionCorrectionBot(question) {
 let newQuestion = "";

	// I made prototype functions to make a more functional approach.
	// My original solution is below.

String.prototype.capitalize = function() {
 return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.reduceCommaSpace = function() {
	 return this.replace(/(\s+\,)/g, ', ');
}

String.prototype.oneCommaSpace = function(){
	 return this.split(',').join(', ');
}

String.prototype.trimExtraWhitespace = function() {
	 return this.replace(/\s+/g, ' ');
}

String.prototype.capitalIs = function() {
	 return this.replace(/\s[i]\s/g, ' I ');
}

String.prototype.removeExtraQuestionMarks = function() {
	 return this.replace(/\?+/g, '?');
}


 newQuestion = question.trim()
                       .capitalize()
                       .reduceCommaSpace()
                       .oneCommaSpace()
                       .trimExtraWhitespace()
	                     .capitalIs()
                       .removeExtraQuestionMarks()

if (newQuestion.substr(-1) !== "?"){
  newQuestion += "?";
}

 return newQuestion;
}


// function questionCorrectionBot(question) {
//  let newQuestion = "";


//  String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// };

//  String.prototype.endsWith = function(pattern) {
//     var d = this.length - pattern.length;
//     return d >= 0 && this.lastIndexOf(pattern) === d;
// };

//  newQuestion = question.trim()
//                        .capitalize()
//                        .replace(/(\s+\,)/g, ', ')
//                        .split(',').join(', ')
//                        .replace(/\s+/g, ' ')
//                        .replace(/\s[i]\s/g, ' I ')
//                        .replace(/\?+/g, '?');

// if (newQuestion.substr(-1) !== "?"){
//   newQuestion += "?";
// }

//  return newQuestion;
// }
