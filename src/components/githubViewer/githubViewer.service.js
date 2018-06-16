
import _ from 'lodash';

export default class githubViewerService {
  constructor($q, $http) {
		'ngInject';
    
    this._ = _;
    this.$q = $q;
    this.$http = $http;
    this.baseUrl = 'https://api.github.com/search/repositories?q=';  
  }

  getUrl(term) {
    return this.baseUrl + term;
  }

  searchRepository(term) {
    return this.$http.get(this.getUrl(term))
      .then((response) => this.handleReponse(response))
  }

  handleReponse(res) {
    const data = this._.get(res, 'data.items');

    if (res.status < 400 && data.length) {
      return this.$q.resolve(res.data);
    }

    return this.$q.reject(res.data);
  }
}