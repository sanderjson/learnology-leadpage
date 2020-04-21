
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const processForm = (formData) => {
	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: encode({ 'form-name': 'lead-magnet', ...formData })
	})
		.then(() => {
      console.log('Form has been submitted!');
      console.log("form data from encode", encode({ 'form-name': 'lead-magnet', ...formData }))
      downloadFile()
		})
		.catch((error) => {
			console.log('Form submit error: ', error);
		});
};

const leadForm = document.getElementById('lead-magnet');

if (leadForm) {
	leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
      firstName: e.target.elements["first-name"].value,
      lastName:e.target.elements["last-name"].value,
      email: e.target.elements["email"].value,
      isParent: e.target.elements["parent-yes"].checked? true: false,
      isStudent: e.target.elements["student-yes"].checked? true: false,
    }
    console.log("formData from listener", formData)
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