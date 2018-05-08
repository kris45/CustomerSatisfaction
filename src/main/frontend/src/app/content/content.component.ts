import { Component, OnInit } from '@angular/core';
import {Brand} from '../shared/models/brand';
import {chartData} from '../shared/models/chartData';
import {HttpService} from '../shared/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  brands: Brand[] = [];
  filteredBrands: Brand[] =[ ];
  chartDataList: chartData[] = [];
  sortValue: boolean = false;

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData().subscribe(data => {
      this.brands=data['brandsList'];
      this.filteredBrands=data['brandsList'];
      this.chartDataList = [];
      data["brandsList"].forEach((elem) => {
        let obj = {name: '', y: null};
        obj.name = elem.name;
        obj.y = elem.amount;
        this.chartDataList.push(obj)
      })
    });
  }

  search(domElem) {
    const inputValue =  domElem.value.toLowerCase().trim();
    this.filteredBrands = this.brands.filter((elem) => {
      return elem.name.toLowerCase().indexOf(inputValue) >= 0
    });
  }

  reset(domElem) {
    domElem.value = '';
    this.filteredBrands = this.brands
  }

  sort() {
    this.sortValue = !this.sortValue;
    if(this.sortValue) {
      this.filteredBrands.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    }

    else {
      this.filteredBrands.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);
    }
  }


}
