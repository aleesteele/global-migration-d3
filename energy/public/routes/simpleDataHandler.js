var parseDate = d3.timeParse("%Y");

d3.csv("/public/data/usaData.csv").row(function(d) {
    return {
        year: parseDate(d.year),
        energy: d.energy
    };
}).get(function(error, data) {

    if (!error) {
        console.log('data:', data);
        var height = 300;
        var width = 500;

        var max = d3.max(data, function(d) {
            return d.energy;
        });
        var minDate = d3.min(data, function(d) {
            return d.year;
        });
        var maxDate = d3.max(data, function(d) {
            return d.year;
        });

        var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);

        var y = d3.scaleLinear().domain([0, max]).range([height, 0]);
        var x = d3.scaleTime().domain([minDate, maxDate]).range([0, width]);
        var yAxis = d3.axisLeft(y);
        var xAxis = d3.axisBottom(x);

        var svg = d3.select("#d3").append("svg").attr("height", "100%").attr("width", "100%");

        var margin = {
            left: 50,
            right: 50,
            top: 40,
            bottom: 0
        };

        var chartGroup = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var line = d3.line()
        // .attr("fill", "hidden")
            .x(function(d) {
            return x(d.year);
        }).y(function(d) {
            return y(d.energy);
        }).curve(d3.curveCardinal);

        var textArray = ['usa', 'consumption', 'levels'];
        chartGroup.append("text")
            .selectAll("tspan")
            .data(textArray).enter().append("tspan").attr("x", 20).attr("y", function(d, i) {
            return 150 + (i * 30);
        })
            .attr("fill", "#82d67e")
            // .attr("stroke", "#82d67e")
            // .attr("stroke-width", "2")
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "start")
            .attr("font-size", "30")
            .text(function(d) {
                return d;
            });

        chartGroup.append("path").attr("d", line(data)).attr("fill", "none").attr("stroke", "#82d67e").attr("stroke-width", "4")
        chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
        chartGroup.append("g").attr("class", "y axis").call(yAxis);

    } else {
        console.log('there was an error: ', error);
    }

})
