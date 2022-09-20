var dataset;

/* d3.csv("./data.csv", function(data) {
    dataset = data;
    console.log(data);
}) */

d3.csv("./data.csv", function(data) {
    dataset = data;
    //console.log(data);
})

d3.select("body")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text("hello");
