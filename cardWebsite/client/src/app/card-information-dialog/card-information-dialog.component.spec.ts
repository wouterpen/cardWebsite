import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformationDialogComponent } from './card-information-dialog.component';

describe('CardInformationDialogComponent', () => {
  let component: CardInformationDialogComponent;
  let fixture: ComponentFixture<CardInformationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInformationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
