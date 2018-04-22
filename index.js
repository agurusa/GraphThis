var dataset = [1, 2, 3];


d3.select("body").selectAll("div")
    .data([1, 2, 3])
    .enter()
    .append("p")
    .text(function(d){
    	return "I'm number" + d;
    });