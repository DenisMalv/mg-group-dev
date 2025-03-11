function wakeUp() {
	console.log("------------- wake up --------------");
	fetch("https://mg-group-post-api.onrender.com/work")
		.then((response) => {
			if (!response.ok) {
				throw new Error(`front fetch error: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			console.log("------------- i am wake up --------------");
			console.log("front fetch complete:", data);
		})
		.catch((error) => {
			console.log("------------- i am sleep --------------");
			console.error("front fetch error:", error);
		})
		.finally(() => {});
}
wakeUp();

setInterval(() => {
	wakeUp();
}, 60 * 60 * 1000); // 60 минут в миллисекундах
