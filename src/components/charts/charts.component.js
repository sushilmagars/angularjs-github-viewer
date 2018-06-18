class ChartsCtrl {
  constructor() {}
  
}

const name = 'charts';
const component = {
  controller: ChartsCtrl,
  templateUrl: 'components/charts/charts.html',
  bindings: {
    forksCount: '<',
    openIssues: '<',
    stargazers: '<'
  },
};

export default {
  name,
  component,
}