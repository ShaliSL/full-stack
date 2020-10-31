import { Order } from './../../model/common.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  orderData: Order[];
  userNames: any = ['John Smith', 'Lissa', 'Laura'];
  productLists: any = ['Pepsi','Fanta', 'Coca Cola'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateOrder();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getOrder(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('product').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getOrder(id) {
    this.apiService.getOrder(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        product: data['product'],
        quantity: data['quantity']
      });
    });
  }

  updateOrder() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateOrder(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-order');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
