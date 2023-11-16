import { Component, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
@Input() product:any;
}
