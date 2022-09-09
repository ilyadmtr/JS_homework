export class TResume{
  name: string = '';
  surname:string = '';
  email:string = '';
  phoneNum: string = '';
  city: string = '';
  experience: {company: string, time:number}[] = [];
  skills: string[] = [];
  photoURL:string = '';
  dateOfBirth = new Date();
}
