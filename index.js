var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];

var w = 500;
var h = 100;
var barPadding = 1;

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height" , h);


var xScale = d3.scaleLinear()
					.domain([0, 
						d3.max(dataset, 
							function(d){
								return d[0];
							})
						])
					.range([0, w]);

var yScale = d3.scale.linear()
					.domain([0,
						d3.max(dataset, 
							function(d){
								return d[1];
							})
						])
					.range([0,h]);

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
	.attr("r", 2)