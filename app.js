

document.getElementById("saveButton").addEventListener("click", () => {
	
	console.log("bk", document.getElementById("inputBook").value)
	console.log("ch", document.getElementById("inputChapter").value)
	
	document.querySelectorAll(".input-verse-number").forEach(function(a,b){
		console.log("verse", a.value);
	});

	console.log(document.querySelector(".input-verse-text").value)
	console.log("tag", document.getElementById("inputTag").value)
	console.log("ver", document.getElementById("inputVersion").value)
	

	
});

var nextVerseNumber = "";
document.getElementById("addAnotherVerseButton").addEventListener("click", () => {

	var verseRows = document.getElementById('verseRows');

	nextVerseNumber = parseInt(verseRows.lastElementChild.querySelector('.input-verse-number').value) + 1;

	var verseInputTemplate = 
		`<div class="verse-row d-flex flex-row flex-wrap mb-4">
			<div class="col-auto pe-2 pe-sm-4">
				<div class="">
					<label for="">Verse</label> <br>
					<input class="input-verse-number" type="text" name="" id="" value="${nextVerseNumber}">
				</div>
			</div>
			<div class="col col-sm-8">
				<div class="">
					<label for="">Verse Text</label>
					<textarea class=" input-verse-text" placeholder="" id=""> </textarea>
				</div>
			</div>
			<div class="col-auto">
				<div class="ps-2 ps-sm-4 pt-4">
					<button class="btn btn-danger btn-sm" id="removeInputVerseRow">Remove</button>
				</div>
			</div>
		</div>`;


		verseRows.insertAdjacentHTML('beforeend', verseInputTemplate);

});

document.addEventListener('click',function(e){
	if(e.target && e.target.id == 'removeInputVerseRow'){
		e.target.closest(".verse-row").remove();
	}
});


(function(){
	var addVerseContainerEl = document.getElementById("addVerseContainer");
	var sectionHeight;
	document.getElementById("vToggle").addEventListener("click", function () {   
	if (addVerseContainerEl.classList.contains('close')) {
		addVerseContainerEl.style.height = sectionHeight + "px";
		setTimeout(() => { addVerseContainerEl.style.height = "auto"; }, 350);
	} else {
		sectionHeight = addVerseContainerEl.scrollHeight;
		addVerseContainerEl.style.height = sectionHeight + "px";
		addVerseContainerEl.style.height = this.scrollHeight + "px";
	} 
	addVerseContainerEl.classList.toggle('close');
	});
	addVerseContainerEl.style.height = sectionHeight + "px";
}());