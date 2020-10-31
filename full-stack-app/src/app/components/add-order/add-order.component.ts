import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  submitted = false;
  orderForm: FormGroup;
  userNames:any = ['John Smith', 'Lissa', 'Laura'];
  productLists: any = ['Pepsi','Fanta', 'Coca Cola'];
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required]],
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    })
  }

  // Choose product with select dropdown
  updateProfile(e){
    this.orderForm.get('product').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.orderForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.orderForm.valid) {
      return false;
    } else {
      this.apiService.createOrder(this.orderForm.value).subscribe(
        (res) => {
          console.log('Order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-order'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
