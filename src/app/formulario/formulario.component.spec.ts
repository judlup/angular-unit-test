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

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should render select values', () => {
  //   const fixture = TestBed.createComponent(FormularioComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('select').textContent).toContain('Value 2');
  // });

  it("Checkbox should not selected", () => {
    expect(component.frmData.controls['chkb'].value).toBeFalsy();
  })

  it("Checkbox should not selected", () => {
    let checkbox = component.frmData.controls['chkb'].setValue(true);
    
    // component.chkbstatus = component.frmData.controls['chkb'].value        
    fixture.detectChanges();
    // expect(component.chkbstatus).toBeTruthy();    
    // expect(component.frmData.controls['chkb'].value).toBeTruthy();    
  })



});
