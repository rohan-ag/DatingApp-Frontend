import { Component, OnInit } from '@angular/core';
import { ValuesService } from './values.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: any;
  constructor(private valueService: ValuesService) { }

  ngOnInit() {
    this.valueService.getValues().subscribe(response => {
      this.values = response;
    },
      (error) => { console.log(error); }
    );
  }

}
