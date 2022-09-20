function main() {
    var svg = d3.select("svg"), 
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;
    
    // Add title
    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 70)
        .attr("y", 50)
        .attr("font-size", "24px")
        .text("Application's Market Coverage");
    
    var xScale = d3.scaleBand().range([0, width]).padding(0.6),
        yScale = d3.scaleLinear().range([height, -100]);
    
    var g = svg.append("g")
                .attr("transform", "translate("+100+","+150+")");
    
    d3.csv("data.csv").then(function(data) {
        xScale.domain(data.map(function(d) { return d.App;}));
        yScale.domain([0, d3.max(data, function(d) { return d.Market_Number;})]);

        g.append("g")
            .attr('transform', 'translate(0,' + height + ')' )
            .call(d3.axisBottom(xScale))

        g.append('g')
            .call(
                d3.axisLeft(yScale)
                    .tickFormat(function(d) { return d;})
                    .ticks(20)
            );

        g.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return xScale(d.App);})
            .attr("y", function(d) { return yScale(d.Market_Number);})
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - yScale(d.Market_Number);});
    });

    console.log("hello");
}