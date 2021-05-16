import { Component, OnInit } from '@angular/core';

import { Student, StudentModel } from './student.model';

@Component({
  templateUrl: './simple.component.html'
})
export class SimpleComponent  {

  constructor(private model: StudentModel) {
    this.student = model.newStudent()
  }
  student: Student

  get interests(): string[] {
    return Object.keys(this.student.interests)
  }

  get list(): Student[] {
    return this.model.list
  }

  save() {

    // Save Data to model
    this.model.add(this.student)

    // Reset Form
    this.student = this.model.newStudent()
  }

  edit(data: Student) {
    this.student = data
  }
}
