import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Treemap({ data, width, height }) {
  const svgRef = useRef(null);

  function renderTreemap() {
    const svg = d3.select(svgRef.current);

    svg.attr('width', width).attr('height', height);

    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);

    const treemapRoot = d3.treemap().size([width, height]).padding(1)(root);
  }

  useEffect(() => {
    renderTreemap();
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
}