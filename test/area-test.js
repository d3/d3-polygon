var tape = require("tape"),
    polygon = require("../");

tape("area(polygon) returns the expected value for closed counterclockwise polygons", function(test) {
  test.equal(polygon.area([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]), 1);
  test.end();
});

tape("area(polygon) returns the expected value for closed clockwise polygons", function(test) {
  test.equal(polygon.area([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]), -1);
  test.equal(polygon.area([[1, 1], [3, 2], [2, 3], [1, 1]]), -1.5);
  test.end();
});

tape("area(polygon) returns the expected value for open counterclockwise polygons", function(test) {
  test.equal(polygon.area([[0, 0], [0, 1], [1, 1], [1, 0]]), 1);
  test.end();
});

tape("area(polygon) returns the expected value for open clockwise polygons", function(test) {
  test.equal(polygon.area([[0, 0], [1, 0], [1, 1], [0, 1]]), -1);
  test.equal(polygon.area([[1, 1], [3, 2], [2, 3]]), -1.5);
  test.end();
});

tape("area(polygon) returns the expected value for a very large polygon", function(test) {
  var start = 0,
      stop = 1e8,
      step = 1e4,
      points = [];
  for (var value = 0; value < stop; value += step) points.push([0, value]);
  for (var value = 0; value < stop; value += step) points.push([value, stop]);
  for (var value = stop - step; value >= 0; value -= step) points.push([stop, value]);
  for (var value = stop - step; value >= 0; value -= step) points.push([value, 0]);
  test.equal(polygon.area(points), 1e16 - 5e7);
  test.end();
});
