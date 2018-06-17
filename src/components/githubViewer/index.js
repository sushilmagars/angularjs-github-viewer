import githubViewer from './githubViewer.component';
import githubViewerService from './githubViewer.service';
import displayCards from './../displayCards/displayCards.component';

const module = angular
  .module('app.github.viewer', [])
  .component(githubViewer.name, githubViewer.component)
  .component(displayCards.name, displayCards.component)
  .service('githubViewerService', githubViewerService);

export default module;
