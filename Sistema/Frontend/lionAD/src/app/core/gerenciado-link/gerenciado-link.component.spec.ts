import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadoLinkComponent } from './gerenciado-link.component';

describe('GerenciadoLinkComponent', () => {
  let component: GerenciadoLinkComponent;
  let fixture: ComponentFixture<GerenciadoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciadoLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
