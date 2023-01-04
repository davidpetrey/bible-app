import { taggedVersesObject } from "../app.js";

export const addNewTags = () => {
	var tagPicker = 					elId("tagPicker");
	var addTag = 							elId("addTag");
	/*
	 *	add new tag
	 */

	// initialize modal
	var newTagModal = new bootstrap.Modal(document.getElementById('newTagModal'), {});

	elId("addTag").addEventListener('change', () => {
		// console.log(addTag.selectedIndex);
		if (elId("addTag").selectedIndex == 1) {
			newTagModal.show()
		}
	})

	// focus on input when modal shown
	elId('newTagModal').addEventListener('shown.bs.modal', function () {
		elId("addTagInput").focus()
	})
	elId('newTagModal').addEventListener('hidden.bs.modal', function () {
		elId("addTagInput").value = '';
	})

	elId("addTagInput").addEventListener('keyup', (e) => {
		if (e.target.value.length) {
			elId("addTagBtn").disabled = false
		} else {
			elId("addTagBtn").disabled = true
		}
	})

	elId("addTagBtn").addEventListener('click', () => {
		// add to array
		addNewTagToArray(elId("addTagInput").value)
		newTagModal.hide()
	})

	elId("cancelAddTag").addEventListener("click", () => { elId("addTag").selectedIndex = 0 });

	function addNewTagToArray(newTagName) {
		console.log(newTagName)
		const tempArray = taggedVersesObject.map((tag) => tag.tagID)
		// console.log(tempArray)

		var newTagID = Math.max(...tempArray) +1
		// console.log(newTagID)

		var newArrayIndexObject = {
			tagName: newTagName,
			tagID: newTagID,
			versesArray: [],
		}

		taggedVersesObject.push(newArrayIndexObject)
		// console.log(taggedVersesObject)

		// remove all dynamically added tag options from selects
		document.querySelectorAll(".dynamic-select-option").forEach((option) => {
			  option.remove();
		});

		// add tags back to selects with the new tag
		taggedVersesObject.forEach((tag) => {
			tagPicker.innerHTML += `<option class="dynamic-select-option" data-tag-id="${tag.tagID}" value="${tag.tagName}">${tag.tagName}</option>`
			addTag.innerHTML += `<option class="dynamic-select-option" data-tag-id="${tag.tagID}" value="${tag.tagName}">${tag.tagName}</option>`
		})



		// set tag to previously set tag
		// tagPicker.selectedIndex = appTagState.currentTagID
		// document.getElementById('addTag').selectedIndex = appTagState.currentTagID


		// set tag select to newly added tag

		// console.log(addTag.length);
		addTag.selectedIndex = addTag.length - 1
		tagPicker.selectedIndex = addTag.length - 2
		// document.getElementById('tagPicker').selectedIndex = 3
	}



}