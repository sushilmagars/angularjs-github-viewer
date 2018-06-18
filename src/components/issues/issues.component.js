class issuesCtrl {
  constructor() {}

  $onChanges() {
    this.allIssues = this.issues;
  }
}

const name = 'displayIssues';
const component = {
  controller: issuesCtrl,
  templateUrl: '/components/issues/issues.html',
  bindings: {
    issues: '<',
  },
}

export default {
  name,
  component,
}