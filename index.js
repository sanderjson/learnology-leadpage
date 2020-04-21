
// const encode = (data) => {
// 	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
// };

const processForm = (form) => {
  const data = new FormData(form);
  data.append('username', 'Chris');
  console.log(data)
	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: { 'form-name': 'lead-form', ...data }
	})
		.then(() => {
			console.log('Form has been submitted!');
      downloadFile()
		})
		.catch((error) => {
			console.log('Form submit error: ', error);
		});
};

const leadForm = document.getElementById('lead-magnet');
console.log(leadForm)
if (leadForm) {
	leadForm.addEventListener('submit', (e) => {
		e.preventDefault();
    processForm(leadForm);
	});
}

const downloadFile = () => {
  	const a = document.createElement('a');
	a.style.display = 'none';
  a.href = './static/Learnology-Ultimate-Home-Study-Guide-web.pdf';
  a.setAttribute('download', 'Learnology-Ultimate-Home-Study-Guide');
	document.body.appendChild(a);
	a.click();
	// Cleanup
	window.URL.revokeObjectURL(a.href);
	document.body.removeChild(a);
}