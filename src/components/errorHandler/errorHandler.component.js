
class errorHandlerCtrl {
  constructor() {

  }

  $onChanges() {
    console.log('error handler', this.errorMessage);
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