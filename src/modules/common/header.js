import refsCommon from "./refsCommon";

const {
	header,
	headerNav,
	headerList,
	burgerModal,
	burgerList,
	headerBurgerBtn,
	sectionAboutUs,
	sectionServices,
	sectionGallery,
	sectionPrice,
	sectionContacts,
} = refsCommon;

const BURGER_MODAL_ACTIVE = "burger-modal-active";
const SHOW = "burger-show";
const BTN_HIDE = "btn-hide";

let timeoutId = [];

const clickInOrOutsideBurger = (e) => {
	if (e.target === header || headerNav.contains(e.target) || e.target === burgerList) {
		console.log("header");
		return;
	}

	if (burgerList.contains(e.target) && e.target.nodeName === "A") {
		console.log("contain");
		closeBurgerMenu();
	} else {
		closeBurgerMenu();
	}
};
const closeBurgerMenu = (resize) => {
	console.log("burger hide");
	burgerModal.classList.remove(BURGER_MODAL_ACTIVE);
	burgerList.classList.remove(SHOW);
	document.body.classList.remove("hidden");

	burgerListAnimationToggle(burgerList);
	document.removeEventListener("click", clickInOrOutsideBurger);
	burgerList.removeEventListener("click", onClickNavigation);

	if (resize) {
		headerBurgerBtn.children[0].classList.remove(BTN_HIDE);
		headerBurgerBtn.children[1].classList.add(BTN_HIDE);
		return;
	}
	toggleBurgerIcon();
};

const openBurgerMenu = () => {
	console.log("burger show");
	burgerModal.classList.add(BURGER_MODAL_ACTIVE);
	burgerList.classList.add(SHOW);
	document.body.classList.toggle("hidden");

	burgerListAnimationToggle(burgerList);
	toggleBurgerIcon();

	document.addEventListener("click", clickInOrOutsideBurger);
	burgerList.addEventListener("click", onClickNavigation);
};

const toggleBurgerMenu = () => {
	if (!burgerModal.classList.contains(BURGER_MODAL_ACTIVE)) {
		openBurgerMenu();
	} else {
		closeBurgerMenu();
	}
};

const burgerListAnimationToggle = (list) => {
	timeoutId = [];
	const childrensArray = Array.from(list.children).reverse();

	for (let i = 0; i < childrensArray.length; i += 1) {
		if (window.innerWidth >= 768) {
			return;
		}

		const id = setTimeout(() => childrensArray[i].classList.toggle("item-show"), 150 + i * 50);
		timeoutId.push(id);
	}
};

const clearTimeoutIdOnDblClick = () => {
	console.log(timeoutId);
	clearTimeout(timeoutId);
	timeoutId = [];
};

const burgerListAnimationHide = (e) => {
	if (e.target.innerWidth < 768) {
		return;
	}
	Array.from(burgerList.children).forEach((el) => el.classList.remove("item-show"));
	closeBurgerMenu("resize");
};

const toggleBurgerIcon = () => {
	Array.from(headerBurgerBtn.children).forEach((el) => el.classList.toggle(BTN_HIDE));
};

const onClickNavigation = (e) => {
	e.preventDefault();

	if (e.target.nodeName === "UL") return;

	const i = e.target.href.indexOf("#");
	const href = e.target.href.slice(i);

	windowScroll(href);
};

const windowScroll = (href) => {
	if (href === "#about-us") {
		window.scroll(0, sectionAboutUs.offsetTop - 30);
		return;
	}
	if (href === "#services") {
		window.scroll(0, sectionServices.offsetTop - 30);
		return;
	}
	if (href === "#last-works") {
		window.scroll(0, sectionGallery.offsetTop - 30);
		return;
	}
	if (href === "#calculator") {
		window.scroll(0, sectionPrice.offsetTop - 30);
		return;
	}
	if (href === "#footer") {
		window.scroll(0, sectionContacts.offsetTop - 30);
		return;
	}
};

headerList.addEventListener("click", onClickNavigation);
headerBurgerBtn.addEventListener("click", toggleBurgerMenu);
headerBurgerBtn.addEventListener("dblclick", clearTimeoutIdOnDblClick);
window.addEventListener("resize", burgerListAnimationHide);
