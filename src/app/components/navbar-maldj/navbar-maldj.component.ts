import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'maldj-app-navbar-maldj',
  templateUrl: './navbar-maldj.component.html',
  styleUrls: ['./navbar-maldj.component.css']
})
export class NavbarMaldjComponent implements OnInit {
  @Input() titulo: string;

  constructor() { 
    this.titulo = ';'
  }

  ngOnInit(): void {
  }

}
