import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // RESUME SECTIONS
  experienceSection = new BehaviorSubject(true);
  skillsSection = new BehaviorSubject(false);
  languagesSection = new BehaviorSubject(true);

  constructor() { }
}
