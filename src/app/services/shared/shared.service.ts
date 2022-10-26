import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // RESUME SECTIONS
  experienceSection = new BehaviorSubject(true);
  skillsSection = new BehaviorSubject(true);
  languagesSection = new BehaviorSubject(true);

  constructor() { }
}
