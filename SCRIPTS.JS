document.addEventListener('DOMContentLoaded', () => {
    const appointmentTableBody = document.getElementById('appointmentsTable').querySelector('tbody');
    const medicineForm = document.getElementById('medicineForm');
    const medicineTableBody = document.getElementById('medicineTable').querySelector('tbody');
    const scheduleForm = document.getElementById('scheduleForm');
    const scheduleTableBody = document.getElementById('scheduleTable').querySelector('tbody');

    // Handle medicine form submission
    medicineForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const medicineName = document.getElementById('medicineName').value;
        const dosage = document.getElementById('dosage').value;
        const instructions = document.getElementById('instructions').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${medicineName}</td>
            <td>${dosage}</td>
            <td>${instructions}</td>
        `;

        medicineTableBody.appendChild(row);

        medicineForm.reset();
    });

    // Handle schedule form submission
    scheduleForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const day = document.getElementById('day').value;
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${day}</td>
            <td>${startTime}</td>
            <td>${endTime}</td>
        `;

        scheduleTableBody.appendChild(row);

        scheduleForm.reset();
    });

    // Dummy data for appointments (you can populate this with real data)
    const appointments = [
        { date: '2024-09-15', time: '10:00', patientName: 'John Doe', details: 'Routine check-up' },
        { date: '2024-09-16', time: '11:30', patientName: 'Jane Smith', details: 'Follow-up' }
    ];

    appointments.forEach(appointment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.details}</td>
        `;

        appointmentTableBody.appendChild(row);
    });
});
