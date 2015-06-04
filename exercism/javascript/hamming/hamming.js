var hamming = function() {};

hamming.compute = function(inputA, inputB) {
 if(inputA.length != inputB.length) {
     throw 'DNA strands must be of equal length.';
 }
 else {
     var i = 0,
         distance = 0;
     
     for(i = 0; i <= inputA.length; i++){
         if(inputA[i] !== inputB[i]) {
             distance++;
         }
     }
 }

return distance;

};

module.exports = hamming;