class Classroom{
constructor(id, subject) {
    this.id = id;
    this.persons = [];
    this.subject = subject;
}
addPerson(person){
    const {persons} = this;
    const teacherPresent = persons.filter(person=>person.occupation === "teacher").length;
    if(person.occupation !== "teacher"){
        if(persons.find(p=>p.id === person.id)) return;
        person.subjects.push(this.subject);
        persons.push(person)
    } else if(!teacherPresent){
        person.subjects.push(this.subject);
        persons.push(person)
    }
    else{
            console.log("Only the teacher")
    }
}
getTeacher(){
    const {persons} = this;
    const teacher = persons.filter(person=>person.occupation === "teacher")[0];
    return teacher;
}
}

export default Classroom;