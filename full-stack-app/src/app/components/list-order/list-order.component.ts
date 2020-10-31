import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  order:any = [];

  constructor(private apiService: ApiService) { 
    this.readOrder();
  }

  ngOnInit() {}

  readOrder(){
      this.apiService.getOrders().subscribe((data) => {
      this.order = data;
    })    
  }

  removeOrder(order, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteOrder(order._id).subscribe((data) => {
          this.order.splice(index, 1);
        }
      )    
    }
  }
}
