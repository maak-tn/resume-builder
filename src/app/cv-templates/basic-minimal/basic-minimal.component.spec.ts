import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMinimalComponent } from './basic-minimal.component';

describe('BasicMinimalComponent', () => {
  let component: BasicMinimalComponent;
  let fixture: ComponentFixture<BasicMinimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicMinimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
