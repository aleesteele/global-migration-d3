var parseDate = d3.timeParse("%Y");
            // .attr("fill", "#82d67e")

d3.csv("/public/data/usaData.csv").row(function(d) {
    return {
        year: parseDate(d.year),
        energy: +d.energy
    };
}).get(function(error, data) {

    if (!error) {
        console.log('data grab successful', data);

        const svg = d3.select('svg')

        const width = +svg.attr('width');
        const height = +svg.attr('height');

        const render = data => {
          const xValue = d => d.energy;
          const yValue = d => d.year;

          const margin = { top:30, right:40, bottom:30, left:30 }
          const innerWidth = width - margin.left - margin.right
          const innerHeight = height - margin.top - margin.bottom

          const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, xValue)])
            .range([0, width])

          const yScale = d3.scaleBand()
            .domain(data.d3.map(yValue))
            .range([0, innerHeight])
            .padding(0.1)

          const yAxis = axisLeft(yScale);

          const g = svg.append('g').call(axisLeft(yScale))
            .attr('transform', `translate(${margin.left},${margin.top})`)

          g.append('g').call(axisLeft(yScale))
          g.append('g').call(axisBottom(xScale))
            .attr('transform', `translate(0,${innerHeight})`)

          g.selectAll('rect').data(data)
            .enter().append('rect')
              .attr('y')
        }

    } else {
        console.log('there was an error: ', error);
    }

})
