const toggles = document.querySelectorAll(".toggle");

const underEighteen = document.querySelector("#underEighteen");
const eighteenTwentyfive = document.querySelector("#eighteenTwentyfive");
const twentyfiveFourtyfive = document.querySelector("#twentyfiveFourtyfive");
const fiftyUp = document.querySelector("#fiftyUp");

toggles.forEach((toggle) =>
	toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

const doTheTrick = (theClickedOne) => {
	if (
		underEighteen &&
		eighteenTwentyfive &&
		twentyfiveFourtyfive &&
		fiftyUp
	) {
		if (underEighteen === theClickedOne) {
			eighteenTwentyfive.checked = false;
			twentyfiveFourtyfive.checked = false;
			fiftyUp.checked = false;
		}
		if (eighteenTwentyfive === theClickedOne) {
			twentyfiveFourtyfive.checked = false;
			underEighteen.checked = false;
			fiftyUp.checked = false;
		}
		if (twentyfiveFourtyfive === theClickedOne) {
			eighteenTwentyfive.checked = false;
			fiftyUp.checked = false;
			underEighteen.checked = false;
		}
		if (fiftyUp === theClickedOne) {
			twentyfiveFourtyfive.checked = false;
			eighteenTwentyfive.checked = false;
			underEighteen.checked = false;
		}
	}
};
