$(function() {
	var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        // スマートフォン
    } else {
    	window.location.href = 'https://ruhiel.github.io/ArmorPiercingShellDamageCalculator/';
    }
});
