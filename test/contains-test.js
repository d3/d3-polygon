import assert from "assert";
import * as d3 from "../src/index.js";

it("polygonContains(polygon, point) returns the expected value for closed counterclockwise polygons", () => {
  assert.strictEqual(d3.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [0.5, 0.5]), true);
  assert.strictEqual(d3.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [1.5, 0.5]), false);
  assert.strictEqual(d3.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [-0.5, 0.5]), false);
  assert.strictEqual(d3.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [0.5, 1.5]), false);
  assert.strictEqual(d3.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [0.5, -0.5]), false);
});

it("polygonContains(polygon, point) returns the expected value for closed clockwise polygons", () => {
  assert.strictEqual(d3.polygonContains([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]], [0.5, 0.5]), true);
  assert.strictEqual(d3.polygonContains([[1, 1], [3, 2], [2, 3], [1, 1]], [1.5, 1.5]), true);
});

it("polygonContains(polygon, point) returns the expected value for open counterclockwise polygons", () => {
  assert.strictEqual(d3.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0]], [0.5, 0.5]), true);
});

it("polygonContains(polygon, point) returns the expected value for open clockwise polygons", () => {
  assert.strictEqual(d3.polygonContains([[0, 0], [1, 0], [1, 1], [0, 1]], [0.5, 0.5]), true);
  assert.strictEqual(d3.polygonContains([[1, 1], [3, 2], [2, 3]], [1.5, 1.5]), true);
});
