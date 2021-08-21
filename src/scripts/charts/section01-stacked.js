import { StackedBarChart } from '@carbon/charts';

const chartHolder = document.getElementById('my-bar-chart');

const data = [
  {
    group: 'Qty',
    value: 65000
  },
  {
    group: 'More',
    value: 29123
  },
  {
    group: 'Sold',
    value: 35213
  },
  {
    group: 'Restocking',
    value: 51213
  },
  {
    group: 'Misc',
    value: 16932
  }
];
const options = {
  title: 'Simple bar (discrete)',
  axes: {
    left: {
      mapsTo: 'value'
    },
    bottom: {
      mapsTo: 'group',
      scaleType: 'labels'
    }
  },
  height: '400px'
};

// initialize the chart
new StackedBarChart(chartHolder, {
  data,
  options
});
