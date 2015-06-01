var words = function(input) {

var counts = Object.create(null);
var arr = input.split(/\s+/g).reduce(function(acc, curr) {
  acc[curr] = acc[curr] || 0;
  acc[curr]++;
  return counts;
}, counts);

return counts;

};

module.exports = words;