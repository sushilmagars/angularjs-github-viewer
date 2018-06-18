class ListsCtrl {
  constructor() {}

  $onChanges() {
    this.listItems = this.repository;
  }
}

const name = 'lists';
const component = {
  controller: ListsCtrl,
  templateUrl: '/components/lists/lists.html',
  bindings: {
    repository: '<',
  },
}

export default {
  name,
  component,
}