import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface ContractorsInfo {
  name: string;
  contractType: string;
  startDate: string;
  amount: string;
  status: string;
}

const ELEMENT_DATA: ContractorsInfo[] = [
  {name: 'Darlene Robertson', contractType: 'Traditional', startDate: 'Mar 4, 2021', amount: '$200 USD', status: 'Active'},
  {name: 'Darlene Robertson', contractType: 'Traditional', startDate: 'Mar 4, 2021', amount: '$200 USD', status: 'Active'},
  {name: 'Darlene Robertson', contractType: 'Traditional', startDate: 'Mar 4, 2021', amount: '$200 USD', status: 'Signature pending'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Client: any = 'OnTop';

  public filterForm: FormGroup = new FormGroup({
    search: new FormControl(''),
    createDate: new FormControl(''),
    contractType: new FormControl(''),
    contractorName: new FormControl(''),
    status: new FormControl('')
  });

  public statusList: any[] = [
    {code: 'A', label: 'Active'},
    {code: 'SP', label: 'Signature pending'},
    {code: 'PP', label: 'Payment pending'},
    {code: 'P', label: 'Paid'},
    {code: 'C', label: 'Complete'}
  ];

  public contractTypeList: any[] = [
    {code: 'T', label: 'Traditional'},
    {code: 'U', label: 'Undefined'},
  ];

  public isOpen = false;

  public displayedColumns: string[] = ['name', 'type', 'startDate', 'amount', 'status'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

    this.displayedColumns.push('menu');
  }

}
