var words = function(input) {

var counts = Object.create(null);
var arr = input.replace(/\s+/g,' ').replace(/\n+/g, ' ').split(' ').reduce(function(acc, curr) {
  acc[curr] = acc[curr] || 0;
  acc[curr]++;
  return counts;
}, counts);

return counts;

};

module.exports = words;