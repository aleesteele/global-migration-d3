


// console.log('inside d3');
// console.log('am i inside the d3 file???');
//
//
//         var dataArray = [25,26,27,304,50,30,19,20,2,3,4,7,23,51,23,555,30,40,69,10]
//         var dataYears = ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010']
//
//         var height = 200;
//         var width = 500;
//
//         var area = d3.area()
//                         .x(function(d,i){ return i*20; })
//                         .y0(height) //distance from top of the screen
//                         .y1(function(d){ return height - d; }); //data point on the chart, the active variable
//
//         svg.append("path")
//             .attr("d", area(dataArray));
//
//         var dataArray = [{x:5, y:5}, {x:10,y:15}, {x:20,y:8}, {x:30, y:20}, {x:40,y:40}, {x:50,y:20}]
//         var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal]
//
//         for (var p=0; p<6; p++) {
//
//             var line = d3.line()
//                             .x(function(d,i){ return d.x*6; })
//                             .y(function(d,i){ return d.y*4; })
//                             .curve(interpolateTypes[p]);
//
//             var shiftX = p*250;
//             var shiftY = 0;
//
//             var chartGroup = svg.append("g")
//                 .attr("class","group"+p)
//                 .attr("transform","translate("+shiftX+",0)")
//
//             chartGroup.append("path")
//                 .attr("fill", "none")
//                 .attr("stroke", "black")
//                 .attr("d", line(dataArray))
//
//             chartGroup.selectAll("circle.grp"+p)
//                 .data(dataArray)
//                 .enter().append("circle")
//                         .attr("class", function(d,i){ return "grp"+i; })
//                         .attr("cx", function(d,i){ return d.x*6; })
//                         .attr("cy", function(d,i){ return d.y*4; })
//                         .attr("r", "2")
//
//
//         }
//
//         svg.selectAll("rect")
//             .data(dataArray)
//             .enter().append("rect")
//                     .attr("height", function(d,i){ return d*15; })
//                     .attr("width","50")
//                     .attr("x", function(d,i){ return 60*i; })
//                     .attr("fill", "#82d67e")
//                     .attr("y", function(d,i){ return 300-(d*15); });
//
//             //d (data point), i (index, position of point)
//             //.enter() & .append() are cornerstone of d3
//
//         var newX = 300;
//         svg.selectAll("circle.first")
//             .data(dataArray)
//             .enter().append("circle")
//                     .attr("class", "first")
//                     .attr("cx", function(d,i){
//                                     newX+=(d*6)+(i*20);
//                                     return newX; })
//                     .attr("cy","100")
//                     .attr("r", function(d){ return d*3; });
//
//         // console.log('inside script.js');
//
//         var newX = 600;
//         svg.selectAll("ellipse")
//             .data(dataArray)
//             .enter().append("ellipse")
//                     .attr("class", "second")
//                     .attr("cx", function(d,i){
//                                     newX+=(d*6)+(i*20);
//                                     return newX; })
//                     .attr("cy","100")
//                     .attr("rx", function(d){ return d*3; })
//                     .attr("ry", "30");
//
//         var newX = 900;
//         svg.selectAll("line")
//             .data(dataArray)
//             .enter().append("line")
//                     // .attr("stroke", "#82d67e")
//                     // .style("stroke", "#82d67e") // different orders of precedence.... attr vs style, style takes precedence, style > css > attr
//                     // .attr("stroke-width", "5")
//                     .attr("x1", newX)
//                     .attr("y1", function(d,i){ return 80+(i*20); })
//                     .attr("x2", function(d){ return newX+(d*15); })
//                     .attr("y2", function(d,i){ return 80+(i*20); });
//
//
//         svg.append("text") //can edit font size, etc as well
//                     .attr("x", newX)
//                     .attr("y",150)
//                     .text("start");
//
//         svg.append("text") //can edit font size, etc as well
//                     .attr("x", newX)
//                     .attr("y",180)
//                     .text("middle");
//
//         svg.append("text") //can edit font size, etc as well
//                     .attr("x", newX)
//                     .attr("y",210)
//                     .text("end");
//
//
//
//
//
//
//
//                     var dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
//                     var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
//
//                     var parseDate = d3.timeParse("%Y");
//                     // console.log(d3.extent(dataYears,function(d){ return parseDate(d); }));
//                     // console.log(parseDate('2003'));
//                     // console.log('2003');
//
//                     var height = 200;
//                     var width = 500;
//
//                     var margin = {left:50,right:50,top:40,bottom:0};
//
//                     var y = d3.scaleLinear()
//                                 .domain([0,d3.max(dataArray)])
//                                 .range([height,0]);
//                                 // .attr("class", "chart")
//
//                     // console.log(y(0));
//                     // console.log(y(90));
//                     // console.log(y(180));
//
//                     var x = d3.scaleTime()
//                                 .domain(d3.extent(dataYears,function(d){ return parseDate(d); }))
//                                 .range([0,width])
//
//                     // console.log(x(parseDate('2010')));
//
//                     var yAxis = d3.axisLeft(y).ticks(4).tickPadding(10).tickSize(10);
//                     var xAxis = d3.axisBottom(x);
//
//                     var area = d3.area()
//                                     .x(function(d,i){ return x(parseDate(dataYears[i])); })
//                                     .y0(height)
//                                     .y1(function(d){ return y(d); });
//
//                     var svg = d3.select("#d3").append("svg").attr("height", "100%").attr("width", "100%");
//                     var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");
//
//                     chartGroup.append("path").attr("d",area(dataArray));
//                     chartGroup.append("g")
//                             .attr("class", "axis y")
//                             // .attr("transform", "translate("+margin.left+","+margin.top+")")
//                             .call(yAxis);
//                     chartGroup.append("g")
//                             .attr("class", "axis x")
//                             .attr("transform", "translate(0,"+height+")")
//                             .call(xAxis);
