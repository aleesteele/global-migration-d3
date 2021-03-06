const map = L.map('map', { zoom: 2 });
const basemap = L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cj84s9bet10f52ro2lrna50yg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {});

L.control.layers(baseLayers, null, {collapsed: false, autoZIndex: false}).setPosition('topleft').addTo(map);
L.control.zoomslider().addTo(map);

const client = new carto.Client({
	apiKey: '9vqvVwALvL_JX-y0YfiqfA',
	username: 'aleesteele'
});

const trainFilter = new carto.filter.Category('trains', { })
