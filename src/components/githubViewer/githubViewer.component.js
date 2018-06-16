class headerCtrl {
	constructor(githubViewerService) {
		'ngInject';

		this.githubViewerService = githubViewerService;
	}

	$onInit() {
		console.log('$onInit', this.$rootScope);
	}

	submit() {
		this.githubViewerService
			.searchRepository(this.searchTerm)
			.then((res) => {
				console.log('res received', res);
			})
			.catch((err) => {
				console.log('nah error:::', err);
			})
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
