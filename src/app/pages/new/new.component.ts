import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  paperForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public ss: SharedService
  ) { }

  ngOnInit(): void {
    this.initPaperForm();
  }

  initPaperForm() {
    this.paperForm = this.fb.group({
      personName: [],
      personPosition: [],
      personBio: [],
      skillsArray: this.fb.array([{ skillTitle: [null] }]),
      languagesArray: this.fb.array([{ languageTitle: [null] }])
    })
  }

  public get getskillsFormArray(): FormArray {
    return this.paperForm.get('skillsArray') as FormArray;
  }

  public get getLanguagesFormArray(): FormArray {
    return this.paperForm.get('languagesArray') as FormArray;
  }

  // form Array handlers
  // ========= SKILLS =========
  addNewGroupToSkillsArray(event: any) {
    event.preventDefault();
    const newSkillFormGroup = this.fb.group({
      skillTitle: [null],
    })
    this.getskillsFormArray.push(newSkillFormGroup);
  }

  removeGroupToSkillsArray(index: number) {
    if (index !== 0)
      this.getskillsFormArray.removeAt(index);
  }


  // ========= LANGUAGES =========
  addNewGroupToLanguagesArray(event: any) {
    event.preventDefault();
    const newLanguageFormGroup = this.fb.group({
      languageTitle: [null]
    })
    this.getLanguagesFormArray.push(newLanguageFormGroup);
  }

  removeGroupFromLanguagesArray(index: number) {
    if (index !== 0)
      this.getLanguagesFormArray.removeAt(index);
  }
}
