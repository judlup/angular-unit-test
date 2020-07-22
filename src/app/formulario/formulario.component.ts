import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public frmData:FormGroup;
  public d1:any;
  public d2:any;
  public d2dis:any = true;
  public chkbstatus:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }  

  ngOnInit() {
    this.frmData = this.formBuilder.group({
      // nombre: ['', Validators.required],
      chkb: ['', Validators.required],
      d1: ['', Validators.required],
      d2: ['', Validators.required],
    });
  }

  sbm(){
    let cb = this.frmData.value.chkb;
    let d1 = this.frmData.value.d1;
    let d2 = this.frmData.value.d2;      
    if(this.frmData.valid){
      console.log("ok");
      return true;
    }else{
      console.log("fail");
      return false;
    }
  }

  DateSel(event){        
    this.d1 = event.target.value;
    this.d2dis = false;
  }

  chkbCh(event){
    this.chkbstatus = event.target.checked;
  }

}
