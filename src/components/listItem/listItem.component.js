class ListItemCtrl {
  constructor() {}

  $onChanges() {
    this.items = this.listItems;
  }
}

const name = 'listItem';
const component = {
  controller: ListItemCtrl,
  templateUrl: '/components/listItem/listItem.html',
  bindings: {
    listItems: '<',
  },
}

export default {
  name,
  component,
}