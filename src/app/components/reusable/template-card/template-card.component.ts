import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent implements OnInit {

  @Input()
  templateTitle: any;

  @Input()
  templateSubtitle: any;

  @Input()
  previewUrl: any;


  constructor() { }

  ngOnInit(): void {
  }

}
