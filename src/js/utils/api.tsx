import jsonp from './jsonp';

export const BehanceApi = function BehanceApi(api: string, callback: Function): void {
	let url = `http://christianheyn.com/v1/shortfolio.php?service=be&task=${api}`;

	if (typeof callback === 'function') {
		jsonp(url, callback);
	}
}
