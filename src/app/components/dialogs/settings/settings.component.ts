import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  experienceIsChecked = true;
  skillsIsChecked = true;
  languagesIsChecked = true;

  constructor(
    private ss: SharedService
  ) { }

  ngOnInit(): void {
    this.updateConfigOptions()
  }

  updateConfigOptions() {
    this.experienceIsChecked = this.ss.experienceSection.getValue();
    this.skillsIsChecked = this.ss.skillsSection.getValue();
    this.languagesIsChecked = this.ss.languagesSection.getValue();
  }

  toggleExperience(event: any) {
    console.log("experience :: ", event.checked);
    this.ss.experienceSection.next(event.checked);
  }
  toggleSkills(event: any) {
    console.log("skills :: ", event.checked);
    this.ss.skillsSection.next(event.checked);
  }
  toggleLanguages(event: any) {
    console.log("languages :: ", event.checked);
    this.ss.languagesSection.next(event.checked);
  }
}
