class displayCardsCtrl {
  constructor() {
    console.log('displayCardsCtrl called');
  }

  $onInit() {
    console.log('oninit called on displayCardsCtrl');
    console.log(this.repository);
    this.url = this.repository.url;
  }

  $onChanges(changes) {
    console.log(changes)
  }
}

const name = 'displayCards';
const component = {
  templateUrl: 'components/displayCards/displayCards.html',
  controller: displayCardsCtrl,
  bindings: {
    repository: '='
  }
}

export default {
  name,
  component,
}

