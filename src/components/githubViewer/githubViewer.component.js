import _ from 'lodash';

class headerCtrl {
	constructor($q, commonService, $state, $timeout) {
		'ngInject';

		this._ = _;
		this.$q = $q;
		this.$state = $state;
		this.$timeout = $timeout;
		this.commonService = commonService;
	}

	getRepositories() {
		return this.commonService.get('/repositories?q=', this.searchTerm);
	}

	getIssues() {
		return this.commonService.get(`/issues?q=repo:${this.username}/`, this.searchTerm);
	}

	submit() {
		this.shouldShowError = false;

		return this.getRepositories()
			.then((res) => {
				this.username = this._.get(res, 'items[0].owner.login');

				return this.$q.all([
					res,
					this.getIssues(),
				]);
			})
			.then(([repositories, issues]) => this.handleSuccessResponse(repositories, issues))
			.catch((err) => {
				// console.log('Error:::', err);
				return this.handleErrorResponse(err);
			})
	}

	handleSuccessResponse(repositories, issues) {
		this.allIssues = this.setIssues(issues);

		this.repository = {
			name: this._.upperFirst(this._.get(repositories, 'items[0].name')),
			url: this._.get(repositories, 'items[0].html_url'),
			description: this._.get(repositories, 'items[0].description'),
			avatar: this._.get(repositories, 'items[0].owner.avatar_url'),
			forks: this._.get(repositories, 'items[0].forks'),
			forksCount: this._.get(repositories, 'items[0].forks_count'),
			stargazersCount: this._.get(repositories, 'items[0].stargazers_count'),
			openIssuesCount: this._.get(repositories, 'items[0].open_issues_count'),
			stargazersCount: this._.get(repositories, 'items[0].stargazers_count'),
		};

		this.shouldShowError = false; // set false after search is successful
	}

	handleErrorResponse(err) {
		console.log(err);
		this.shouldShowError = true;
		this.errorMessage = this._.get(err, 'data.errors[0].message');
	}

	setIssues(issues) {
		if (issues) {
			this.start = 0;
			this.end = 10;
			return issues.items.slice(this.start, this.end);
		} else {
			this.start = this.end;
			this.end += 10; // take next 10

			this.getIssues()
				.then((res) => {
					this.allIssues = res.items.slice(this.start, this.end);
				}
			)
		}
	}
}

const name = 'appGithubViewer';

const component = {
	controller: headerCtrl,
	templateUrl: 'components/githubViewer/githubViewer.html',
};

export default {
	name,
	component,
};
