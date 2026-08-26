const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('table-content');

function addRow(form, values) {
	const row = document.createElement('tr');

	values.forEach((value) => {
		const cell = document.createElement('td');
		cell.textContent = value;
		row.appendChild(cell);
	});

	studentTable.appendChild(row);
	form.reset();
}

studentForm?.addEventListener('submit', (event) => {
	event.preventDefault();

	addRow(studentForm, [
		document.getElementById('idNumber').value.trim(),
		document.getElementById('firstName').value.trim(),
		document.getElementById('middleName').value.trim(),
		document.getElementById('lastName').value.trim()
	]);
});

const subjectForm = document.getElementById('subjectForm');

subjectForm?.addEventListener('submit', (event) => {
	event.preventDefault();

	addRow(subjectForm, [
		document.getElementById('subjectCode').value.trim(),
		document.getElementById('subjectName').value.trim(),
		document.getElementById('units').value.trim()
	]);
});
