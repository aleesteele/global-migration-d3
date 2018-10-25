
var parseDate = d3.timeParse("%Y");

d3.csv("/public/data/primary-energy.csv")
    .row(function(d){
        // for () {
        //
        // }
        return {
            name: d.name,
            '1965': d[1],
            '1966': d[2],
            '1967': d[3],
            '1968': d[4],
            '1969': d[5],
            '1970': d[6],
            '1971': d[7],
            '1972': d[8],
            '1973': d[9],
            '1974': d[10],
            '1975': d[11],
            '1976': d[12],
            '1977': d[13],
            '1978': d[14],
            '1979': d[15],
            '1980': d[16]
            // '1981': d.1981,
            // '1982': d.1982,
            // '1983': d.1983,
            // '1984': d.1984,
            // '1985': d.1985,
            // '1986': d.1986,
            // '1987': d.1987,
            // '1988': d.1988,
            // '1989': d.1989,
            // '1990': d.1990,
            // '1991': d.1991,
            // '1992': d.1992,
            // '1993': d.1993,
            // '1994': d.1994,
            // '1995': d.1995,
            // '1996': d.1996,
            // '1997': d.1997,
            // '1998': d.1998,
            // '1999': d.1999,
            // '2000': d.2000,
            // '2001': d.2001,
            // '2002': d.2002,
            // '2003': d.2003,
            // '2004': d.2004,
            // '2005': d.2005,
            // '2006': d.2006,
            // '2007': d.2007,
            // '2008': d.2008,
            // '2009': d.2009,
            // '2010': d.2010,
            // '2011': d.2011,
            // '2012': d.2012,
            // '2013': d.2013,
            // '2014': d.2014,
            // '2015': d.2015,
            // '2016': d.2016
        };
    })
    .get(function(error,data){

        if (!error) {
            console.log('data:', data);
            var height = 300;
            var width = 500;

            var max = d3.max(data,function(d){
                console.log('console of d: ', d)
                    // for () {
                        return d.energy;
                    // }
            });
            var minDate = d3.min(parseDate(1965));
            var maxDate = d3.max(parseDate(1980));

            var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0,10]);

            var y = d3.scaleLinear()
                      .domain([0,max])
                      .range([height,0]);
            var x = d3.scaleTime()
                      .domain([minDate,maxDate])
                      .range([0,width]);
            var yAxis = d3.axisLeft(y);
            var xAxis = d3.axisBottom(x);

            var svg = d3.select("#d3").append("svg").attr("height", "100%").attr("width", "100%");

            var margin = {left:50,right:50,top:40,bottom:0};

            var chartGroup = svg.append("g")
                      .attr("transform","translate("+margin.left+","+margin.top+")");

            var line = d3.line()
                    // .attr("fill", "hidden")
                    .x(function(d){ return x(d.year); })
                    .y(function(d){ return y(d.energy); })
                    .curve(d3.curveCardinal);


            chartGroup.append("path")
                .attr("d",line(data))
                .attr("fill", "none")
                .attr("stroke", "blue");
            chartGroup.append("g").attr("class","x axis").attr("transform","translate(0,"+height+")").call(xAxis);
            chartGroup.append("g").attr("class","y axis").call(yAxis);

        }
        else {
            console.log('error: ', error);
        }

})
