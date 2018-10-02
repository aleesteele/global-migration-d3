
//
// d3.csv("/public/data/primary-energy.csv")
//     // .row(function(d){
//     //     // console.log('d!!!: ', d);
//     //     // return {
//     //     //     name: ,
//     //     //     value:
//     //     // };
//     // })
//     .get(function(error,data){
//         // console.log('data', data);
//         if (error) {
//             console.log('there was an error: ', error);
//         }
//         else {
//
//             var parseDate = d3.timeParse("%Y");
//             let years = data[0]
//             console.log('years list', years);
//
//             let usaData = data[1];
//             console.log('usaData', usaData);
//
//             // var max = d3.max(data, function(d){ return d; })
//             var height = 500;
//             var width = 700;
//             var margin = {left:50,right:50,top:40,bottom:0};
//             // var max = d3.max(usaData, function(d){
//             //                             console.log('inside max: ', usaData);
//             //                             return d[1]; })
//             // console.log('max', max);
//
//             // let newDates = oldDates.slice(0)
//             // console.log('dates', data[0].prototype.slice(0))
//
//
//             // console.log('years', d3.extent(years,function(d){ return parseDate(d); }));
//             console.log('years trying to parse: ', parseDate(years));
//                 var parseDate = d3.timeParse("%Y")
//                 // console.log(parseDate);
//                 console.log('this is parsing the date', d3.extent(years,function(d){ return parseDate(d); }));
//
//
//             var y = d3.scaleLinear()
//                        .domain([0,d3.max(3000)])
//                        .range([height,0]);
//                        // .attr("class", "chart")
//
//             var x = d3.scaleTime()
//                        .domain(d3.extent(years,function(d){ return parseDate(d); }))
//                        .range([0,width])
//
//             var yAxis = d3.axisLeft(y).ticks(8).tickPadding(10).tickSize(10);
//             var xAxis = d3.axisBottom(x);
//
//             var area = d3.area()
//                 .x(function(d,i){ return x(parseDate(years[i])); })
//                 .y0(height)
//                 .y1(function(d){ return y(d); });
//
//
//             var svg = d3.select("#d3").append("svg").attr("height", "100%").attr("width", "100%");
//             var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");
//
//             chartGroup.append("path")
//                     .attr("d",area(usaData));
//             chartGroup.append("g")
//                    .attr("class", "axis y")
//                    // .attr("transform", "translate("+margin.left+","+margin.top+")")
//                    .call(yAxis);
//             chartGroup.append("g")
//                    .attr("class", "axis x")
//                    .attr("transform", "translate(0,"+height+")")
//                    .call(xAxis);
//
//
//         }
//
//     })




// d3.json("/public/data/primary-energy.json").get(function (error,data) {
//
//     console.log("THIS IS THE DATA TOTAL", data);
//     // console.log("this is data[1]", data[1]);
//     // console.log('data[1].children: ', data[1].children)
//
//     var dataYears = data[0]
//     console.log('dataYears is this: ', dataYears);
//
//     var parseDate = d3.timeParse("%Y")
//     // console.log(parseDate);
//     console.log('this is parsing the date', d3.extent(dataYears,function(d){ return parseDate(d); }));
//
//
//     var height = 200;
//     var width = 500;
//     var margin = {left:50,right:50,top:40,bottom:0};
//     // for (var i = 0; i < dataArray1.length; i++) {
//     //     var pos = dataArray1[i];
//     //     console.log('pos: ', pos)
//     //     var thisData = {
//     //         x: pos.x,
//     //         y: pos.y
//     //     }
//     //     console.log('thisData: ', thisData);
//     // }
//
//     var y = d3.scaleLinear()
//                 .domain([0,d3.max(data[1][1])])
//                 .range([height,0]);
//                 // .attr("class", "chart")
//
//     var x = d3.scaleTime()
//                 .domain(d3.extent(dataYears,function(d){ return parseDate(d); }))
//                 .range([0,width])
//
//
//     var area = d3.area()
//                     .x(function(d,i){ return x(parseDate(dataYears[i])); })
//                     .y0(height)
//                     .y1(function(d){ return y(d); });
//
//
//     var svg = d3.select("#d3").append("svg").attr("height", "100%").attr("width", "100%");
//     var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");
//
//
// });












// var dataArray = [5,11,18];
// var dataDays = ['Mon', 'Wed', 'Fri'];
//
// var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0,10]);
// var rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0,3]);
//
// var x = d3.scaleBand()
//             .domain(dataDays)
//             .range([0,170])
//             .paddingInner(0.1176);
//
// var xAxis = d3.axisBottom(x);
//
//
// var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");
//
// var cat20 = d3.schemeCategory20;
// // var cat19 = d3.schemeCategory19;
//
// console.log(cat20);
//
// svg.selectAll("rect")
//       .data(dataArray)
//       .enter().append("rect")
//                 .attr("height",function(d,i){ return d*15; })
//                 .attr("width","50")
//                 .attr("fill", function(d,i){ return rainbow(i); })
//                 .attr("x",function(d,i){ return 60*i; })
//                 .attr("y",function(d,i){ return 300-(d*15); });
//
// svg.append("g")
//         .attr("class","x axis hidden")
//         .attr("transform", "translate(0,300)")
//         .call(xAxis)
//
// var newX = 300;
// svg.selectAll("circle.first")
//       .data(dataArray)
//       .enter().append("circle")
//                 .attr("class","first")
//                 .attr("fill", function(d,i){ return rainbow2(i); })
//                 .attr("cx",function(d,i){ newX+=(d*3)+(i*20); return newX; })
//                 .attr("cy","100")
//                 .attr("r",function(d){ return d*3; });
//
// var newX = 600;
// svg.selectAll("ellipse")
//       .data(dataArray)
//       .enter().append("ellipse")
//                 .attr("class","second")
//                 .attr("fill", function(d,i){ return cat20[i]; })
//                 .attr("cx",function(d,i){ newX+=(d*3)+(i*20); return newX; })
//                 .attr("cy","100")
//                 .attr("rx",function(d){ return d*3; })
//                 .attr("ry","30");
//
// var newX = 900;
// svg.selectAll("line")
//       .data(dataArray)
//       .enter().append("line")
//                 .attr("x1",newX)
//                 .attr("stroke-width","2")
//                 .attr("y1",function(d,i){ return 80+(i*20); })
//                 .attr("x2",function(d){ return newX+(d*15); })
//                 .attr("y2",function(d,i){ return 80+(i*20); });
//
// var textArray = ['start','middle','end'];
// svg.append("text").selectAll("tspan")
//     .data(textArray)
//     .enter().append("tspan")
//       .attr("x",newX)
//       .attr("y",function(d,i){ return 150 + (i*30); })
//       .attr("fill","none")
//       .attr("stroke", function(d,i){ return cat20[i]; })
//       .attr("stroke-width","2")
//       .attr("dominant-baseline","middle")
//       .attr("text-anchor","start")
//       .attr("font-size","30")
//       .text(function(d){ return d; });
//
// // svg.append("line")
// //       .attr("x1",newX)
// //       .attr("y1","150")
// //       .attr("x2",newX)
// //       .attr("y2","210");
