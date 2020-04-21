const processForm = (form) => {
	const data = new FormData(form);
	data.append('form-name', 'lead-form');
	fetch('/', {
		method: 'POST',
		body: data
	})
		.then(() => {
			console.log('Form has been submitted!');
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
		e.preventDefault();
		processForm(leadForm);
	});
}
