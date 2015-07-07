import area from "./area";

export default function(polygon, k) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c;

  if (k == null) k = -1 / (6 * area(polygon));

  while (++i < n) {
    a = b;
    b = polygon[i];
    c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }

  return [x * k, y * k];
};
