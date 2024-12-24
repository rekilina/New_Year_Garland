function ballBounce(e) {
	var i = e;
	if (e.className.indexOf(" bounce") > -1) {
		return;
	}
	toggleBounce(i);
}

function toggleBounce(i) {
	i.classList.add("bounce");
	function n() {
		i.classList.remove("bounce")
		i.classList.add("bounce1");
		function o() {
			i.classList.remove("bounce1")
			i.classList.add("bounce2");
			function p() {
				i.classList.remove("bounce2")
				i.classList.add("bounce3");
				function q() {
					i.classList.remove("bounce3");
				}
				setTimeout(q, 300)
			}
			setTimeout(p, 300)
		}
		setTimeout(o, 300)
	}
	setTimeout(n, 300)
}

var array1 = document.querySelectorAll('.ball_bounce')
var array2 = document.querySelectorAll('.ball_bounce .ball__right')

for (var i = 0; i < array1.length; i++) {
	array1[i].addEventListener('mouseenter', function () {
		ballBounce(this)
	})
}

for (var i = 0; i < array2.length; i++) {
	array2[i].addEventListener('mouseenter', function () {
		ballBounce(this)
	})
}
