function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.querySelectorAll('.btn').forEach(btn => {
  btn.setAttribute('target', '_blank');
});