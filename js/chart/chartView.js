import { clearContainer } from '../utils.js';

export default class ChartView {
  constructor(target) {
    this.target = target;
    this.init();
  }

  getChartWrapper() {
    const chartWrapper = `
      <div class="chart">
        <svg class="chart__grid">
          <g>
            <line x1="0" x2="0" y1="0" y2="500"></line>
            
            <line class="chart__grid-line" x1="400" x2="400" y1="0" y2="500"></line>
            <line class="chart__grid-line" x1="300" x2="300" y1="0" y2="500"></line>
            <line class="chart__grid-line" x1="200" x2="200" y1="0" y2="500"></line>
            <line class="chart__grid-line" x1="100" x2="100" y1="0" y2="500"></line>
          </g>
          <g>
            <line x1="0" x2="500" y1="500" y2="500"></line>
            
            <line class="chart__grid-line" x1="0" x2="500" y1="400" y2="400"></line>
            <line class="chart__grid-line" x1="0" x2="500" y1="300" y2="300"></line>
            <line class="chart__grid-line" x1="0" x2="500" y1="200" y2="200"></line>
            <line class="chart__grid-line" x1="0" x2="500" y1="100" y2="100"></line>
            
            <text x="-15" y="515">0</text>
          </g>
          <g class="chart__markers"></g>
          <g class="chart__points"></g>
        </svg>
      </div>
    `;
    document.querySelector(this.target).insertAdjacentHTML('beforeend', chartWrapper);
  }

  static drawPoints(data) {
    const fragment = document.createDocumentFragment();
    const markerContainer = document.querySelector('.chart__markers');
    const pointContainer = document.querySelector('.chart__points');
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('fill', 'none');
    polyline.setAttribute('stroke', '#0ade0a');
    polyline.setAttribute('points', '');

    const chartSize = 500;
    const dataMax = Math.max.apply(Math, data.reduce((result, item) => result.concat(Object.values(item)), [0]));
    const scaleCoefficient = chartSize / dataMax;
    const gridStep = dataMax ? Math.round(dataMax / 5) : '';
    const chartMarkers = `
      <g>
        <text x="500" y="515">${dataMax || ''}</text>
        <text x="400" y="515">${gridStep * 4 || ''}</text>
        <text x="300" y="515">${gridStep * 3 || ''}</text>
        <text x="200" y="515">${gridStep * 2 || ''}</text>
        <text x="100" y="515">${gridStep || ''}</text>
      </g>
      <g>
        <text x="-35" y="0">${dataMax || ''}</text>
        <text x="-35" y="100">${gridStep * 4 || ''}</text>
        <text x="-35" y="200">${gridStep * 3 || ''}</text>
        <text x="-35" y="300">${gridStep * 2 || ''}</text>
        <text x="-35" y="400">${gridStep || ''}</text>
      </g>
    `;

    clearContainer(pointContainer);
    clearContainer(markerContainer);

    const points = data.reduce((result, item) => {
      const valueX = item.x * scaleCoefficient;
      const valueY = chartSize - item.y * scaleCoefficient;
      const coordinates = polyline.getAttribute('points') + `${valueX},${valueY} `;
      const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      point.setAttribute('fill', '#0ade0a');
      point.setAttribute('stroke', 'none');
      point.setAttribute('cx', `${valueX}`);
      point.setAttribute('cy', `${valueY}`);
      point.setAttribute('r', '5');
      polyline.setAttribute('points', coordinates);
      result.appendChild(point);
      result.appendChild(polyline);

      return result;
    }, fragment);

    markerContainer.insertAdjacentHTML('beforeend', chartMarkers);
    pointContainer.appendChild(points);
  }

  init() {
    this.getChartWrapper();
  }
}
