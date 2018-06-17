import _ from 'lodash';

class headerCtrl {
	constructor($q, githubViewerService, $state, $timeout) {
		'ngInject';

		this._ = _;
		this.$q = $q;
		this.$state = $state;
		this.$timeout = $timeout;
		this.githubViewerService = githubViewerService;
	}

	$onInit() {
		console.log('$onInit', this.$rootScope);
	}

	getRepositories() {
		return this.githubViewerService.get('/repositories?q=', this.searchTerm);
	}

	getIssues() {
		return this.githubViewerService.get(`/issues?q=repo:${this.username}/`, this.searchTerm);
	}

	submit() {
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
				console.log('nah error:::', err);
				return this.handleErrorResponse(err);
			})
	}

	handleSuccessResponse(repositories, issues) {
		this.allIssues = this.setIssues(issues);
		console.log(issues);
		console.log(this.allIssues);

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

		console.log(this.repository)
	}

	handleErrorResponse(err) {

	}

	setIssues(issues) {
		console.log('issues exist?', Boolean(issues));
		if (issues) {
			this.start = 0;
			this.end = 10;
			return issues.items.slice(this.start, this.end);
		} else {
			console.log(this.start)
			console.log(this.end)

			this.start = this.end;
			this.end += 10; // take next 10

			this.getIssues()
				.then((res) => {
					console.log(res.items.slice(this.start, this.end));
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
