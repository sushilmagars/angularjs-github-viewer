import githubViewer from './githubViewer.component';
import commonService from './../../services/common/common.service';
import displayCards from './../displayCards/displayCards.component';
import issues from './../issues/issues.component';
import errorHandler from './../errorHandler/errorHandler.component';

const module = angular
  .module('app.github.viewer', [])
  .component(githubViewer.name, githubViewer.component)
  .component(issues.name, issues.component)
  .component(errorHandler.name, errorHandler.component)
  .service('commonService', commonService);

export default module;
