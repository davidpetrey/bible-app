import { taggedVersesObject } from "../app.js";


export const vToggleClickEvent = document.getElementById("vToggle").addEventListener("click", function (e) {
		document.getElementById("addVerseContainer").classList.toggle('close');
		this.classList.toggle('close');
});


// whole OT and NT book lists
const bookListArray = [
	[ [1, 'Genesis'], [19, 'Psalms'], [20, 'Proverbs'] ],
	[ [62, '1 John'], [63, '2 John'], [64, '3 John'], [65, 'Jude'] ], ]

export function setBooksFunction() {

	let addBooksToSelect = (testament) => {
		formElBookList.innerHTML = ''
		bookListArray[testament].forEach((book) => {
			formElBookList.innerHTML += `<option data-num="${book[0]}" value"${book[1]}">${book[1]}</option>`
		})
	}

	if (formElTestament.checked == true) {
		// console.log("checked")
		addBooksToSelect(1)
	} else {
		// console.log("not checked")
		addBooksToSelect(0)
	}
}




export const saveButtonEvent = saveButton.addEventListener('click', function (e) {
	// console.log(verseForm.checkValidity());
	if (verseForm.checkValidity() && addTag.selectedIndex > 1) {
		e.preventDefault()

		taggedVersesObject.forEach(function (tagObject) {
			// match tag id
			if(tagObject.tagID == addTag.selectedOptions[0].dataset.tagId){
				console.log(tagObject);

				let verseTextRef = {
					"book":{"id":formElBookList.selectedOptions[0].dataset.num, "name":formElBookList.value},
					"reference": formElVerseRef.value,
					"text": formElText.value,
				}


				// update array
				tagObject.versesArray.push(verseTextRef)
			}
		});


		console.log(taggedVersesObject);
		localStorage.setItem('taggedVersesObjectKey', JSON.stringify(taggedVersesObject));

	}
})
