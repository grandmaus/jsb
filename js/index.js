import DatasetCommonView from './dataset/datasetCommonView.js';
import DatasetView from './dataset/datasetView.js';

const dataset = new DatasetCommonView();
dataset.render('#app');

const datasetView = new DatasetView();
datasetView.init();
