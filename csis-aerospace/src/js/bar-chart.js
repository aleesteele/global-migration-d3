import * as d3 from 'd3';
import { selection } from 'd3-selection';

const svg = d3.select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');

console.log(width, height);

const circle = svg.append('circle')
		.attr('r', height / 2)
		.attr('cx', width / 2)
		.attr('cy', height / 2)
		.attr('fill', 'yellow')
		.attr('stroke', 'black');

const eyeSpacing = 100;
const eyeYOffset = 80

const leftEye = svg.append('circle')
		.attr('r', 30)
		.attr('cx', width / 2 - eyeSpacing)
		.attr('cy', height / 2 - eyeYOffset)
		.attr('fill', 'black')

const rightEye = svg.append('circle')
		.attr('r', 30)
		.attr('cx', width / 2 + eyeSpacing)
		.attr('cy', height / 2 - eyeYOffset)
		.attr('fill', 'black')
