// Returns the last element of an array.
// Passing n will return the last n elements of the array.

var array = [5, 4, 3, 2, 1];

Array.prototype.last = function(n){
  n = n || 1;
  return this.slice(-n);
};

array.last();
// [1]

array.last(3);
// [3, 2, 1]
