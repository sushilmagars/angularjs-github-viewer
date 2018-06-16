import githubViewer from './githubViewer.component';
import githubViewerService from './githubViewer.service';

const module = angular
  .module('app.github.viewer', [])
  .component(githubViewer.name, githubViewer.component)
  .service('githubViewerService', githubViewerService);

export default module;
