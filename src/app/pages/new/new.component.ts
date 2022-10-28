import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

// COMPONENTS
import { SettingsComponent } from 'src/app/components/dialogs/settings/settings.component';

// SERVICES
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
    public ss: SharedService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initPaperForm();
  }

  initPaperForm() {
    this.paperForm = this.fb.group({
      personName: [],
      personPosition: [],
      personBio: [],
      skillsArray: this.fb.array([]),
      languagesArray: this.fb.array([]),
      experienceArray: this.fb.array([])
    })
  }

  public get getskillsFormArray(): FormArray {
    return this.paperForm.get('skillsArray') as FormArray;
  }

  public get getLanguagesFormArray(): FormArray {
    return this.paperForm.get('languagesArray') as FormArray;
  }

  public get geExpeienceFormArray(): FormArray {
    return this.paperForm.get('experienceArray') as FormArray;
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
    this.getLanguagesFormArray.removeAt(index);
  }


  // ========= EXPERIENCE =========
  addNewGroupToExpeienceArray(event: any) {
    event.preventDefault();
    const newExperienceFormGroup = this.fb.group({
      experienceposition: [null],
      experienceCompany: [null],
      experienceDate: [null],
      experienceDescription: [null]
    })
    this.geExpeienceFormArray.push(newExperienceFormGroup);
  }

  removeGroupFromExpeienceArray(index: number) {
    this.geExpeienceFormArray.removeAt(index);
  }


  // GENERAL BEHAVIOR
  openSettingsDialog() {
    const dialogRef = this.dialog.open(SettingsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
