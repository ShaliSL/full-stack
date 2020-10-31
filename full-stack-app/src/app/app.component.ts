import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'full-stack-app';

  limit = 5;
  page = 0;
  
  dataSource: any;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
  }

  changePageSize(pageSize) {
    this.limit = pageSize;
   // this.getOrdersList({"page": this.page, "limit": this.limit})
  }
  

}
