import classroomController from "../controller/classroom";
import {subjects} from "../models/subjects";

class ClassroomView {
    constructor(appDiv) {
        this.classroomController = new classroomController();
        this.classroomSectionDiv = document.createElement('div');
        this.classroomsDiv = document.createElement('div');
        this.addclassBtn = document.createElement('button');
        this.selectSubjectInput = document.createElement('select');

        this.classroomSectionDiv.classList.add('classroom-section');
        this.classroomsDiv.classList.add('classroom-container');
        this.classroomsDiv.innerHTML = 'Not classrooms';
        this.selectSubjectInput.innerHTML = subjects.map((option, index) => (
            `<option key=${index} value=${option}>${option.toUpperCase()}</option>`
        ));
        this.addclassBtn.textContent = 'New Class';
        this.addclassBtn.addEventListener('click', () => this.addClassroom());
        this.classroomSectionDiv.append(
            this.classroomsDiv, this.selectSubjectInput,
            this.addclassBtn,
        );
        appDiv.appendChild(this.classroomSectionDiv);
    }

    updateView() {
        const { classroomController, classroomsDiv } = this;
        const allClassrooms = classroomController.classrooms.map(
            c => {
                const removeBtn = document.createElement('button');
                const classDiv = document.createElement('div');
                classDiv.classList.add('classroom');
                if (classroomController.selectedClass === c) {
                    classDiv.classList.add('selected');
                }
                classDiv.addEventListener('click', () => this.selectClassroom(classDiv.getAttribute('data-classroom-id')));
                classDiv.setAttribute('data-classroom-id', c.id);
                removeBtn.addEventListener('click', () => this.removeClassroom(removeBtn.getAttribute('data-classroom-id')));
                removeBtn.setAttribute('data-classroom-id', c.id);
                removeBtn.classList.add('remove-btn');
                removeBtn.textContent= 'Remove';
                const allPersons = c.persons.map(p => (
                    `<div class="person-inline">
            <span class="fname">${p.firstName}</span>
            <span class="lname">${p.lastName}</span>
            <span class="${p.occupation}">${p.occupation}</span>
          </div>`
                ));
                classDiv.innerHTML = `<div class="m-b">
            <span class="id">${c.id}</span>
            <span class="subject">${c.subject}</span></div>
            <div class="all-persons">${allPersons.join('')}</div>`;
                classDiv.appendChild(removeBtn);
                return classDiv;
            }
        );
        classroomsDiv.innerHTML='';
        allClassrooms.map(div => classroomsDiv.append(div));
    }

    selectClassroom(classroomID) {
        const { classroomController } = this;
        classroomController.selectClassroom(classroomID);
        this.updateView();
    }

    addClassroom() {
        const {
            classroomController,
            selectSubjectInput,
        } = this;
        const subjectChosen = selectSubjectInput.value;
        classroomController.addClassroom(subjectChosen);
        this.updateView();
    }

    removeClassroom(classroomID) {
        const { classroomController } = this;
        classroomController.removeClassroom(classroomID);
        this.updateView();
    }

    addPerson(person, classroomID) {
        const { classroomController } = this;
        classroomController.addPerson(person, classroomID);
        this.updateView();
    }
}

export default ClassroomView;