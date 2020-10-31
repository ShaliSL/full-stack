import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  order:any = [];
  limit = 5;
  constructor(
    private apiService: ApiService
  ) { }
  page = 0;

  ngOnInit(): void {
  }

 changetoAllTime() {
  this.apiService.getOrders().subscribe((data) => {
    this.order = data;

   })    
 }

 changeDays() {
  this.apiService.getOrders().subscribe((data) => {
    this.order = data;

   })   
 }

 changeToday() {
  this.apiService.getOrders().subscribe((data) => {
    this.order = data;

   })   
 }
}
