export jsonp function jsonp(url: string, callback: Object): void {
    let callbackName: string = `jsonp_callback_${ + Math.round(100000 * Math.random())}`,
    	script = document.createElement('script');

    window[callbackName] = (data: Object<T>) => {
	    delete window[callbackName];
	    document.body.removeChild(script);

	    callback(data);
	};

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    
    document.body.appendChild(script);
};

export function fetchBehanceApi(api: string, callback: Function): void {
	let url = `http://christianheyn.com/v1/shortfolio.php?service=be&task=${api}`;

	if (typeof callback === 'function') {
		jsonp(url, callback);
	}
}