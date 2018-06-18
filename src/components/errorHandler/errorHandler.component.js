
class errorHandlerCtrl {
  constructor() {

  }

  $onChanges() {
    this.errMessage = this.errorMessage;
    this.shouldShowError = this.showError;
  }
}

const name = 'errorHandler';
const component = {
  controller: errorHandlerCtrl,
  templateUrl: 'components/errorHandler/errorHandler.html',
  bindings: {
    errorMessage: '<',
    showError: '<',
  }
}

export default {
  name,
  component,
}