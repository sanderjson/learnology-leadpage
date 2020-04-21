const processForm = (form) => {
	const data = new FormData(form);
	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: encode({ 'form-name': 'lead-form', data })
	})
		.then(() => {
			console.log('Form has been submitted!');
			downloadFile(
				'Free Download:The Ultimate Guide to AcademicSuccess',
				'Learnology-Ultimate-Home-Study-Guide-web.pdf'
			);
		})
		// .then(() => {
		//   form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
		// })
		.catch((error) => {
			console.log('error', error);

			// form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
		});
};

const leadForm = document.getElementById('lead-form');
if (leadForm) {
	leadForm.addEventListener('submit', (e) => {
		processForm(leadForm);
		e.preventDefault();
	});
}

// The function injects an <a> element into the body, sets it URL to a Blob value to the text content of the destination file, and clicks the element to trigger the download.  The element remains hidden during the process and is removed from the DOM immediately after the click() call.  As soon as the function is called, the browser's download prompt is displayed.
function downloadFile(data, fileName, type = 'text/plain') {
	// Create an invisible A element
	const a = document.createElement('a');
	a.style.display = 'none';
	document.body.appendChild(a);

	// Set the HREF to a Blob representation of the data to be downloaded
	a.href = window.URL.createObjectURL(new Blob([ data ], { type }));

	// Use download attribute to set set desired file name
	a.setAttribute('download', fileName);

	// Trigger the download by simulating click
	a.click();

	// Cleanup
	window.URL.revokeObjectURL(a.href);
	document.body.removeChild(a);
}
