import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  paperForm!: FormGroup;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initPaperForm();
  }

  initPaperForm() {
    this.paperForm = this.fb.group({
      personName: [],
      personPosition: [],
      personBio: [],
    })
  }
}
