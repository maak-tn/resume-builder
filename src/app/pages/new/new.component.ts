import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  noTemplatePreviewAvailable = 'https://imgur.com/k4Tg2Kh.png';
  constructor() { }

  ngOnInit(): void {
  }

}
