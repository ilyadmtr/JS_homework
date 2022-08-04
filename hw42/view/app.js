import classroomView from './classroom';
import personView from './person';

class AppView {
    constructor(appDiv) {
        this.classroomView = new classroomView(appDiv);
        this.personView = new personView(appDiv);
        this.addPersonToClassBtn = document.createElement('button');

        this.addPersonToClassBtn.textContent = 'Add selected Person to Selected Class';
        this.addPersonToClassBtn.addEventListener('click', () => this.addPersonToClass());
        appDiv.appendChild(this.addPersonToClassBtn);
    }

    addPersonToClass() {
        const { classroomView, personView } = this;
        const { classroomController } = classroomView;
        const { personController } = personView;
        const selectedClassroom = classroomController.selectedClass;
        const selectedPerson = personController.selectedPerson;
        classroomView.addPerson(selectedPerson, selectedClassroom);
        personView.updateView();
    }
}

export default AppView;
