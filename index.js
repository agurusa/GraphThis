var dataset = [];
var numDataPoints = Math.random() * 100;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for(var i = 0; i < numDataPoints; i++){
	var newNumx = Math.round(Math.random() * xRange);
	var newNumy = Math.round(Math.random() * yRange);
	dataset.push([newNumx, newNumy]);
}


var w = 500;
var h = 500;
var r = 4;
var padding = 20;

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height" , h);


//note for later: ordinal scale
var xScale = d3.scaleLinear()
					.domain([0, 
						d3.max(dataset, 
							function(d){
								return d[0];
							})
						])
					.range([padding, w-padding * 2]);

var yScale = d3.scaleLinear()
					.domain([0,
						d3.max(dataset, 
							function(d){
								return d[1];
							})
						])
					.range([h - padding, padding]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
	.attr("cx", function(d){
		return xScale(d[0]);
	})
	.attr("cy", function(d){
		return yScale(d[1]);
	})
	.attr("r", r);
svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(0," + (h-padding) + ")")
	.call(xAxis);
svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(" + padding + ", 0)")
	.call(yAxis);