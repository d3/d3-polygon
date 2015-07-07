# d3-polygon

This module provides a few basic geometric operations for two-dimensional polygons. Each polygon is represented as an array of two-element arrays [​[<i>x1</i>, <i>y1</i>], [<i>x2</i>, <i>y2</i>], …], and may either be closed (wherein the first and last point are the same) or open (wherein they are not). Typically polygons are in counterclockwise order, assuming a coordinate system where the origin ⟨0,0⟩ is in the top-left corner.

## Installing

If you use NPM, `npm install d3-polygon`. Otherwise, download the [latest release](https://github.com/d3/d3-polygon/releases/latest).

## API Reference

<a href="#area" name="area">#</a> <b>area</b>(<i>polygon</i>)

Returns the signed area of the specified *polygon*. If the vertices of the polygon are in counterclockwise order (assuming a coordinate system where the origin ⟨0,0⟩ is in the top-left corner), the returned area is positive; otherwise it is negative, or zero.

<a href="#centroid" name="centroid">#</a> <b>centroid</b>(<i>polygon</i>)

Returns the [centroid](https://en.wikipedia.org/wiki/Centroid) of the specified *polygon*.

## Changes from D3 3.x:

* The d3.geom.polygon API is replaced with standalone [area](#area) and [centroid](#centroid) functions.

* The polygon.clip method has been removed. Do you need it? Let me know.
