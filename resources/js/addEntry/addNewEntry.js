import { taggedVersesObject } from "../app.js";


export const vToggleClickEvent = document.getElementById("vToggle").addEventListener("click", function (e) {
		document.getElementById("addVerseContainer").classList.toggle('close');
		this.classList.toggle('close');
});


// whole OT and NT book lists
const bookListArray = [
	['Genesis', 'Proverbs', 'Psalms'],
	['1 John', '2 John', '3 John', 'Jude'],
]

export function setBooksFunction() {

	let addBooksToSelect = (testament) => {
		formElBookList.innerHTML = ''
		bookListArray[testament].forEach((book) => {
			formElBookList.innerHTML += `<option value"${book}">${book}</option>`
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

		let ref = formElBookList.value + ' ' + formElVerseRef.value

		console.log(addTag.selectedOptions[0].dataset.tagId)
		console.log(addTag.value)

		console.log("formElText.value", formElText.value)
		console.log(ref)

		taggedVersesObject.forEach(function (tagObject) {
			if(tagObject.tagID == addTag.selectedOptions[0].dataset.tagId){
				console.log(tagObject);
				let verseTextRef = {
					verseRefKey: ref,
					verseKey: formElText.value,
				}

				// update array
				tagObject.versesArray.push(verseTextRef)
			}
		});


		console.log(taggedVersesObject);
		localStorage.setItem('taggedVersesObjectKey', JSON.stringify(taggedVersesObject));

	}
})
