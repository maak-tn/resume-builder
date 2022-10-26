import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  paperForm!: FormGroup;

  // RESUME SECTIONS
  showExperienceSection: any;
  showSkillsSection: any;
  showLanguagesSection: any;

  constructor(
    private fb: FormBuilder,
    private ss: SharedService
  ) { }

  ngOnInit(): void {
    this.initPaperForm();
    this.setSections();
  }

  initPaperForm() {
    this.paperForm = this.fb.group({
      personName: [],
      personPosition: [],
      personBio: [],
    })
  }

  // DISPLAY RESUME SECTIONS
  setSections() {
    this.showExperienceSection = this.ss.experienceSection.getValue();
    this.showSkillsSection = this.ss.skillsSection.getValue();
    this.showLanguagesSection = this.ss.languagesSection.getValue();
  }
}
