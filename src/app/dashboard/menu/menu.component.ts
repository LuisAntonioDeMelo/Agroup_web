import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class MenuComponent implements OnInit {
  user:string= "'luis'"
  constructor() { }

  ngOnInit() {
  }

}
