const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('table-content');

studentForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const student = [
		document.getElementById('idNumber').value.trim(),
		document.getElementById('firstName').value.trim(),
		document.getElementById('middleName').value.trim(),
		document.getElementById('lastName').value.trim()
	];

	const row = document.createElement('tr');

	student.forEach((value) => {
		const cell = document.createElement('td');
		cell.textContent = value;
		row.appendChild(cell);
	});

	studentTable.appendChild(row);
	studentForm.reset();
});
