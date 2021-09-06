import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
// import Swal from "sweetalert2";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  formGroup : FormGroup
  newGroup : FormGroup
  constructor() { }

  ngOnInit(): void {
    this.initForm()
    console.warn(this.formGroup.value)
  }

  initForm(){
    this.formGroup = new FormGroup({
      invoice : new FormControl('test',[Validators.required]),
      nama : new FormControl('test',[Validators.required]),
      alamat : new FormControl('test',[Validators.required]),
      tagihan : new FormArray([
        new FormGroup({
          deskripsi_tagihan : new FormControl('test',[Validators.required]),
          tagihan : new FormControl('test',[Validators.required]),
        })
      ])
    })
  }
  addNewDesk(){
    this.newGroup = new FormGroup({
      deskripsi_tagihan : new FormControl('test',[Validators.required]),
      tagihan : new FormControl('test',[Validators.required]),
    })
  }
}
