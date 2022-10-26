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
}
