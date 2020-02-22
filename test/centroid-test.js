var tape = require("tape"),
    polygon = require("../");

tape("polygonCentroid(points) returns the expected value for closed counterclockwise polygons", function(test) {
  test.deepEqual(polygon.polygonCentroid([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]), [.5, .5]);
  test.end();
});

tape("polygonCentroid(points) returns the expected value for closed clockwise polygons", function(test) {
  test.deepEqual(polygon.polygonCentroid([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]), [.5, .5]);
  test.deepEqual(polygon.polygonCentroid([[1, 1], [3, 2], [2, 3], [1, 1]]), [2, 2]);
  test.end();
});

tape("polygonCentroid(points) returns the expected value for open counterclockwise polygons", function(test) {
  test.deepEqual(polygon.polygonCentroid([[0, 0], [0, 1], [1, 1], [1, 0]]), [.5, .5]);
  test.end();
});

tape("polygonCentroid(points) returns the expected values for closed counterclockwise polygons", function(test) {
  test.deepEqual(polygon.polygonCentroid([[0, 0], [1, 0], [1, 1], [0, 1]]), [.5, .5]);
  test.deepEqual(polygon.polygonCentroid([[1, 1], [3, 2], [2, 3]]), [2, 2]);
  test.end();
});

tape("polygonCentroid(polygon) returns the expected value for a very large polygon", function(test) {
  var stop = 1e8,
      step = 1e4,
      points = [],
      value;
  for (value = 0; value < stop; value += step) points.push([0, value]);
  for (value = 0; value < stop; value += step) points.push([value, stop]);
  for (value = stop - step; value >= 0; value -= step) points.push([stop, value]);
  for (value = stop - step; value >= 0; value -= step) points.push([value, 0]);
  test.deepEqual(polygon.polygonCentroid(points), [49999999.75000187, 49999999.75001216]);
  test.end();
});
