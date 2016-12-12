var global = this

var inc = 0;

global.onmessage = function(e) {
	if (e.data.withDelay) {
		for (var i = 0; i < 50000; i++) {
			var y = Math.pow(i, i);
			inc += y;
		}
	}
	postMessage(e.data);
}
