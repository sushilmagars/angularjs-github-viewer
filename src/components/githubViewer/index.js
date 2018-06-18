import githubViewer from './githubViewer.component';
import commonService from './../../services/common/common.service';
import issues from './../issues/issues.component';
import lists from './../lists/lists.component';
import listItem from './../listItem/listItem.component';
import errorHandler from './../errorHandler/errorHandler.component';
import charts from './../charts/charts.component';

const module = angular
  .module('app.github.viewer', [])
  .component(githubViewer.name, githubViewer.component)
  .component(lists.name, lists.component)
  .component(listItem.name, listItem.component)
  .component(issues.name, issues.component)
  .component(errorHandler.name, errorHandler.component)
  .component(charts.name, charts.component)
  .service('commonService', commonService);

export default module;
