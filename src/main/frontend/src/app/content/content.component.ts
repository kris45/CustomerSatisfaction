import { Component, OnInit } from '@angular/core';
import {Brand} from "../shared/models/brand";
import {HttpService} from "../shared/content.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  brands: Brand[]=[];
  filteredBrands: Brand[]=[];

  constructor(private httpService: HttpService){}

  ngOnInit(){

    this.httpService.getData().subscribe(data => {
      this.brands=data["brandsList"];
      this.filteredBrands=data["brandsList"];
    });
  }

  search(domElem) {
    const inputValue =  domElem.value.toLowerCase();
    this.filteredBrands = this.brands.filter((elem) => {
      return elem.name.toLowerCase().indexOf(inputValue) >= 0
    });
  }

  reset(domElem) {
    domElem.value = '';
    this.filteredBrands = this.brands
  }

  sort() {
    this.filteredBrands.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    console.log(this.filteredBrands);
  }

}
