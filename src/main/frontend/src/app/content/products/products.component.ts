import { Input, Component, OnInit } from '@angular/core';
import {Brand} from "../../shared/models/brand";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() brands: Brand[];
  constructor() { }

  ngOnInit() {
  }


}
