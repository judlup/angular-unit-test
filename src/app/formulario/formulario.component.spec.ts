import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario.component';
import { CommonModule } from '@angular/common';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    component.ngOnInit(); 
    fixture.detectChanges();
  });

  it("Checkbox should not selected", () => {
    expect(component.frmData.controls['chkb'].value).toBeFalsy();
  })

  it("Checkbox should not selected", () => {
    const checkbox = fixture.debugElement.nativeElement.querySelector('.chkb');
    checkbox.click();
    fixture.detectChanges();    
    expect(checkbox).toBeTruthy();
          
  })



});
