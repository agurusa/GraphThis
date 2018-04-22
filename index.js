var dataset = {1, 2, 3}

d3.select("body").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", function(d){
		var barHeight = d*5;
		return barHeight + "px";
	});