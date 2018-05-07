import { Component, OnInit } from '@angular/core';
import {Brand} from "../shared/models/brand";
import {chartData} from "../shared/models/chartData";
import {HttpService} from "../shared/content.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  brands: Brand[]=[];
  filteredBrands: Brand[]=[];
  chartDataList: chartData[]=[];
  test: {};

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData().subscribe(data => {
      this.brands=data["brandsList"];
      this.filteredBrands=data["brandsList"];
      console.log(data['brandsList']);
      this.chartDataList = [
        {
          name: 'Nike',
          y: 61.41
        },
        {
          name: 'Adidas',
          y: 11.84
        },
        {
          name: 'Converse',
          y: 10.85
        },
        {
          name: 'Reebok',
          y: 4.18
        },
        {
          name: 'Puma',
          y: 7.05
        },
        {
          name: 'New Balance',
          y: 4.67
        },
      ]
      data["brandsList"].forEach((elem) => {

      })
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
  }

}
