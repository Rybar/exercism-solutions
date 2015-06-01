var words = function(input) {
 var arr = input.replace(/\s+/g,' ').replace(/\n+/g, ' ').split(' ');
 console.log(arr);
 var counts = {};
 var i = 0;
  
    for(i = 0; i <= arr.length-1; i++) {
        var word = arr[i];
        counts["" + word] = counts["" + word] || 0;
        counts["" + word]++;
    }
    
return counts;

};

module.exports = words;