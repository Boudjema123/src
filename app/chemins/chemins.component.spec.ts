import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheminsComponent } from './chemins.component';

describe('CheminsComponent', () => {
  let component: CheminsComponent;
  let fixture: ComponentFixture<CheminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
