import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-last-order',
  templateUrl: './last-order.component.html',
  styleUrls: ['./last-order.component.css'],
})
export class LastOrderComponent implements OnInit {
  search = '';
  constructor() {}

  ngOnInit(): void {}

  onSearchRecipes(search: any) {
    this.search = search;
  }
}
