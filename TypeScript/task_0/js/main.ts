interface Student {
    firstname: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: 'Bengin',
    lastName: 'Uzun',
    age: 26,
    location: 'Frejus',
}

const student2: Student = {
    firstname: 'Mazlum',
    lastName: 'Uzun',
    age: 31,
    location: 'Frejus',
}

const students: Student[] = [student1, student2];

    const studenttable = document.createElement('table');
    students.forEach(student => {
        const list = document.createElement('tr');
        const nameRow = document.createElement('td');
        const locationRow = document.createElement('td');
        nameRow.textContent = `${student.firstname}`;
        locationRow.textContent = `${student.location}`;
        list.appendChild(nameRow);
        list.appendChild(locationRow);

    studenttable.appendChild(list);
    });
    document.body.appendChild(studentTable);