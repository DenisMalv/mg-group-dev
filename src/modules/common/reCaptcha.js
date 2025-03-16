function loadReCaptcha() {
	if (!window.grecaptcha) {
		const script = document.createElement("script");
		script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
	}
}

setTimeout(() => {
	loadReCaptcha();
}, 1000);
