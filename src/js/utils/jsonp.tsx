export default function jsonp(url: string, callback: Object) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data: Object<T>) {
	    delete window[callbackName];
	    document.body.removeChild(script);
	    callback(data);
	};

	var script = document.createElement('script');
    	script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
};