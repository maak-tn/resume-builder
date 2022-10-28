import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  @Input()
  templateTag: any;


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  useTemplate(templateTag: string) {
    this._router.navigate(['/new', templateTag])
  }

}
