/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
  var result = [];

  recursive(arr);

  return result;

  function recursive(item) {
    if (!item || item.length === 0) return;

    if (!Array.isArray(item)) {
      result.push(item);
      return;
    }

    if (Array.isArray(item)) {
      recursive(item[0]);
    }

    recursive(item.slice(1));
  }
}
