import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDialogComponent } from './politica-dialog.component';

describe('PoliticaDialogComponent', () => {
  let component: PoliticaDialogComponent;
  let fixture: ComponentFixture<PoliticaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
