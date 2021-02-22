import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucDirectiveDemoComponent } from './struc-directive-demo.component';

describe('StrucDirectiveDemoComponent', () => {
  let component: StrucDirectiveDemoComponent;
  let fixture: ComponentFixture<StrucDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
