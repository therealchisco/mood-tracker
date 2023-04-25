import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

type LineChartData = {
  x: number;
  y: number;
};

type Props = {
  data: LineChartData[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

function LineChart({
  data,
  width,
  height,
  margin = { top: 10, right: 30, bottom: 30, left: 60 },
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const svg = d3.select(svgRef.current);

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.x) as [number, number])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.y) as [number, number])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<LineChartData>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data, height, margin, width]);

  return (
    <div>
      <svg ref={svgRef} width={width} height={height}>
        <g />
      </svg>
    </div>
  );
}

export default LineChart;
