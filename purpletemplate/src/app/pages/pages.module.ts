import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { AkadComponent } from './akad/akad.component';


const routes: Routes = [
  { path: 'form-invoice', component: InvoiceComponent },
  { path: 'form-akad', component: AkadComponent },
]

@NgModule({
  declarations: [InvoiceComponent, AkadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
