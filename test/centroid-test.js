var tape = require("tape"),
    polygon = require("../");

tape("polygon.centroid(points) returns the expected value for closed counterclockwise polygons", function(test) {
  test.deepEqual(polygon.centroid([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]), [.5, .5]);
  test.end();
});

tape("polygon.centroid(points) returns the expected value for closed clockwise polygons", function(test) {
  test.deepEqual(polygon.centroid([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]), [.5, .5]);
  test.deepEqual(polygon.centroid([[1, 1], [3, 2], [2, 3], [1, 1]]), [2, 2]);
  test.end();
});

tape("polygon.centroid(points) returns the expected value for open counterclockwise polygons", function(test) {
  test.deepEqual(polygon.centroid([[0, 0], [0, 1], [1, 1], [1, 0]]), [.5, .5]);
  test.end();
});

tape("polygon.centroid(points) returns the expected value for closed counterclockwise polygons", function(test) {
  test.deepEqual(polygon.centroid([[0, 0], [1, 0], [1, 1], [0, 1]]), [.5, .5]);
  test.deepEqual(polygon.centroid([[1, 1], [3, 2], [2, 3]]), [2, 2]);
  test.end();
});

tape("polygon.centroid(polygon) returns the expected value for a very large polygon", function(test) {
  var start = 0,
      stop = 1e8,
      step = 1e4,
      points = [];
  for (var value = 0; value < stop; value += step) points.push([0, value]);
  for (var value = 0; value < stop; value += step) points.push([value, stop]);
  for (var value = stop - step; value >= 0; value -= step) points.push([stop, value]);
  for (var value = stop - step; value >= 0; value -= step) points.push([value, 0]);
  test.deepEqual(polygon.centroid(points), [49999999.75000188, 49999999.75001217]);
  test.end();
});
