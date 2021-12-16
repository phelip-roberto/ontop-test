import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    contractType: new FormControl(false),
    contractorName: new FormControl(false),
    status: new FormControl(false)
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

  constructor() { }

  ngOnInit() {
  }

}
