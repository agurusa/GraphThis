var parsed_dataset = [];

path1 = "http://localhost:8000/Dropbox/New%20Mac/Project%20Files/emd_qt_app_2/csv_files/yy_308.csv";
path2 = "http://localhost:8000/Dropbox/New%20Mac/Project%20Files/emd_qt_app_2/csv_files/yy_309.csv";

var filenames = [path1/*, path2*/];

var w = 700;
var h = 700;
var barwidth = 2;
var padding = 20;
var svg = d3.select("body")
	.append("svg")
	.attr("width", w)
	.attr("height" , h);


var promises = [];
filenames.forEach(function(path){
	promises.push(d3.csv(path))
});
var datasets = [];
Promise.all(promises).then(function(dataset_array){
	dataset_array.forEach(function(dataset){
		console.log(dataset);
		var headers = d3.keys(dataset[0]);
		//headers[0] will be the x axis
		// var svg = d3.select("body")
		// .append("svg")
		// .attr("width", w)
		// .attr("height" , h);

		var xScale = d3.scaleLinear()
			.domain([0, 
				d3.max(dataset, 
					function(d){
						return d[headers[0]];
					})
				])
			.range([padding, w-padding * 2]);

		var yScale = d3.scaleLinear()
			.domain([0,
				d3.max(dataset, 
					function(d){
						return d[headers[1]];
					})
				])
			.range([h - padding, padding]);

		var xAxis = d3.axisBottom(xScale);
		var yAxis = d3.axisLeft(yScale);

		var r = svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			// .transition()
   //  		.delay(function(d, i) { return i; })
			// .attr("x", function(d,i){
			// 	return xScale(d[headers[0]]);
			// })
			// .attr("y", function(d){
			// 	return d[headers[1]];
			// })
			// .attr("width", function(d){
			// 	return r;
			// })
			// .attr("height", function(d){
			// 	return yScale(d[headers[1]]);
			// })
			// .attr("opacity", ".2")
			// .attr("fill", function(d){
			// 	var c = d3.hsl("steelblue");
			// 	c.h+= d[headers[0]]*10000000;
			// 	c.s+=0.2;
			// 	return c+"";
			// })
			.attr("x", function(d,i){
				return xScale(d[headers[0]]);
			})
			.attr("y", function(d){
				return yScale(d[headers[1]]);
			})
			.attr("width", function(d){
				return barwidth;
			})
			// .attr("hover", "red");
			;
		r.transition()
    		.delay(function(d, i) { return i; })
			.attr("height", function(d){
				return ( yScale(d[headers[1]]));
			})

			.attr("opacity", ".5")
			.attr("fill", function(d){
				var c = d3.hsl("steelblue");
				c.h+= d[headers[0]]*10000000;
				c.s+=0.2;
				return c+"";
			})
		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (h-padding) + ")")
			.call(xAxis);
		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxis);
		// svg.selectAll("circle")
		// .data(dataset)
		// .enter()
		// .append("circle")
		// .attr("cx", function(d){
		// 	return xScale(d[headers[0]]);
		// })
		// .attr("cy", function(d){
		// 	return yScale(d[headers[1]]);
		// })
		// .attr("opacity", ".5")
		// .attr("fill", function(d){
		// 	var c = d3.hsl("steelblue");
		// 	c.h+= d[headers[0]]*10000000;
		// 	c.s+=0.2;

		// 	return c+"";
		// })
		// .attr("r", r);
		// svg.append("g")
		// .attr("class", "axis")
		// .attr("transform", "translate(0," + (h-padding) + ")")
		// .call(xAxis);
		// svg.append("g")
		// .attr("class", "axis")
		// .attr("transform", "translate(" + padding + ", 0)")
		// .call(yAxis);

		// svg.selectAll("text")
		// .data(dataset[0])
		// .enter()
		// .append("text")
		// .attr("fill" , "blue")
		// .attr("font-size", "8px")
		// .attr("x", function(d,i){
		// 	return d[headers[0]];
		// })
		// .attr("y", function(d){
		// 	return d[headers[1]];
		// })
		// .text(function(d){
		// 	return d[headers[0]] + "," + d[headers[1]];
		// })
	});
});

// function analyze(error, data){
// 	if(error)  console.log("ERROR " + error);
// 	console.log(data);
// };
// };
// d3.text(path, function(text){
// 	d3.csvParseRows(text, function(d){
// 		parsed_dataset.push(d);
// 		svg.selectAll("text")
// 		.enter()
// 		.append("text")
// 		.attr("fill" , "blue")
// 		.text(function(d){
// 			return d;
// 		});
// 	});
// });

// d3.csv(path).get(function(error,data){
// 	console.log(data);
// })


// var dataset = [];
// var numDataPoints = Math.random() * 100;
// var xRange = Math.random() * 1000;
// var yRange = Math.random() * 1000;
// for(var i = 0; i < numDataPoints; i++){
// 	var newNumx = Math.round(Math.random() * xRange);
// 	var newNumy = Math.round(Math.random() * yRange);
// 	dataset.push([newNumx, newNumy]);
// };


// var w = 500;
// var h = 500;
// var r = 4;
// var padding = 20;

// var svg = d3.select("body")
// .append("svg")
// .attr("width", w)
// .attr("height" , h);

// //note for later: ordinal scale
// var xScale = d3.scaleLinear()
// .domain([0, 
// 	d3.max(dataset, 
// 		function(d){
// 			return d[0];
// 		})
// 	])
// .range([padding, w-padding * 2]);

// var yScale = d3.scaleLinear()
// .domain([0,
// 	d3.max(dataset, 
// 		function(d){
// 			return d[1];
// 		})
// 	])
// .range([h - padding, padding]);

// var xAxis = d3.axisBottom(xScale);
// var yAxis = d3.axisLeft(yScale);


// svg.selectAll("circle")
// .data(dataset)
// .enter()
// .append("circle")
// .attr("cx", function(d){
// 	return xScale(d[0]);
// })
// .attr("cy", function(d){
// 	return yScale(d[1]);
// })
// .attr("r", r);
// svg.append("g")
// .attr("class", "axis")
// .attr("transform", "translate(0," + (h-padding) + ")")
// .call(xAxis);
// svg.append("g")
// .attr("class", "axis")
// .attr("transform", "translate(" + padding + ", 0)")
// .call(yAxis);

// svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .attr("fill" , "blue")
// .attr("font-size", "8px")
// .attr("x", function(d,i){
// 	return d[0];
// })
// .attr("y", function(d){
// 	return d[1];
// })
// .text(function(d){
// 	return d[0] + "," + d[1];
// });