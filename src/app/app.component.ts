import { Component } from '@angular/core';
import { SidebarModel } from './models/sidebar.model';
import {Structure} from '../app/models/structure.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  addStructure:Structure;
  addnew:Structure;

  sidebarModel: any = [
    { 'icon': 'bi bi-house-door ', 'name': 'Overview' },
    { 'icon': 'bi bi-thermometer-high', 'name': 'Symptoms' },
    { 'icon': 'bi bi-receipt', 'name': 'Access' },
    { 'icon': 'bi bi-bookmark-plus', 'name': 'Journal' },
    { 'icon': 'i bi-info-circle', 'name': 'Support' },
  ];
  ngOnInIt() {
    //this.looping();
  }

}
