interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Bengin',
    lastName: 'Uzun',
    age: 26,
    location: 'Frejus',
}

const student2: Student = {
    firstName: 'Mazlum',
    lastName: 'Uzun',
    age: 31,
    location: 'Frejus',
}

const students: Student[] = [student1, student2];

    const studentTable = document.createElement('table');
    students.forEach(student => {
        const list = document.createElement('tr');
        const nameRow = document.createElement('td');
        const locationRow = document.createElement('td');
        nameRow.textContent = `${student.firstName}`;
        locationRow.textContent = `${student.location}`;
        list.appendChild(nameRow);
        list.appendChild(locationRow);

    studenttable.appendChild(list);
    });
    document.body.appendChild(studentTable);