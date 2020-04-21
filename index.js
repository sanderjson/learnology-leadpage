
const encode = (data) => {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};

const processForm = (formData) => {
  // const data = new FormData(form);
  // console.log(data)
	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: encode({ 'form-name': 'lead-form', ...dataData })
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
// console.log(leadForm)
if (leadForm) {
	leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
      firstName: e.target.elements[0].value,
      lastName: e.target.elements[1].value,
      email: e.target.elements[2].value,
      isParent: e.target.elements[3].checked? true: false,
      isStudent: e.target.elements[5].checked? true: false,
    }
    // console.log(formData)
    processForm(formData)
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