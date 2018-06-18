import styles from './styles/styles.scss';
import './services/core.module';
import './app.components';

const appModule = angular
	.module('app', [
		'app.core',
		'ui.router',
		'app.github.viewer',
		'chart.js'
	]);

export default appModule;
