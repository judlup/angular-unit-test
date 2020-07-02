import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public frmData:FormGroup;

  ngOnInit() {
    this.frmData = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  sbm(){
    console.log("Aqui");
  }

}
