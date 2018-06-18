class ChartsCtrl {
  constructor() {}

  $onChanges() {
    console.log('printing charts');
    console.log(this.forksCount);
    console.log(this.openIssues);
    console.log(this.stargazers);
  }
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