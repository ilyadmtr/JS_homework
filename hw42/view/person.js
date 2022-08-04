import personController from '../controller/person';
import occupation from "../models/occupation";

class PersonView {
    constructor(appDiv) {
        this.personController = new personController();
        this.personSectionDiv = document.createElement('div');
        this.personDiv = document.createElement('div');
        this.personsNameInput = document.createElement('input');
        this.personsOccupationInput = document.createElement('select');
        this.addPersonBtn = document.createElement('button');

        this.personSectionDiv.classList.add('person-section');
        this.personDiv.classList.add('person-container');
        this.personsOccupationInput.innerHTML = occupation.map((option, index) => (
            `<option key=${index} value=${option}>${option.toUpperCase()}</option>`
        ));
        this.addPersonBtn.textContent = 'New Person';
        this.addPersonBtn.addEventListener('click', () => this.addPerson());
        this.personSectionDiv.append(
            this.personDiv, this.personsNameInput,
            this.personsOccupationInput, this.addPersonBtn
        );
        appDiv.appendChild(this.personSectionDiv);
    }

    updateView() {
        const {personController, personDiv} = this;
        const allPersons = personController.persons.map(
            p => {
                const removeBtn = document.createElement('button');
                const personDiv = document.createElement('div');
                personDiv.classList.add('person');
                if (personController.selectedPerson === p) {
                    personDiv.classList.add('selected');
                }
                personDiv.addEventListener('click', () => this.selectPerson(personDiv.getAttribute('data-person-id')));
                personDiv.setAttribute('data-person-id', p.id);
                removeBtn.addEventListener('click', e => this.removePerson(removeBtn.getAttribute('data-person-id')));
                removeBtn.setAttribute('data-person-id', p.id);
                removeBtn.classList.add('remove-btn');
                removeBtn.textContent = 'Remove';
                personDiv.innerHTML = `<span class="fname">${p.firstName}</span><span class="lname">${p.lastName}</span><span class="subjects">${p.subjects.length ? "" : p.subjects.map(el=>`<span>${el}</span>`)}</span><span class="${p.occupation}">${p.occupation}</span>`
                personDiv.appendChild(removeBtn);
                return personDiv;
            }
        );
        personDiv.innerHTML = '';
        allPersons.map(div => personDiv.append(div));
    }

    selectPerson(personID) {
        const {personController} = this;
        personController.selectPerson(personID)
        this.updateView();
    }

    addPerson() {
        const {
            personController,
            personsNameInput,
            personsOccupationInput
        } = this;
        const fullname = personsNameInput.value;
        const occupationChosen = personsOccupationInput.value;
        const space = fullname.search(/ /g)
        const fName = fullname.substring(0, space)
        const lName = fullname.substring(space + 1, fullname.length)
        personController.addPerson(fName, lName, occupationChosen);
        this.updateView();
    }

    removePerson(personID) {
        const {personController} = this;
        personController.removePerson(personID);
        this.updateView();
    }
}

export default PersonView;