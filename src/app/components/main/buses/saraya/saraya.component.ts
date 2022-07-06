import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saraya',
  templateUrl: './saraya.component.html',
  styleUrls: ['./saraya.component.scss']
})
export class SarayaComponent implements OnInit {
  pageTitle:string = 'Saraya El Qubaa';
  constructor() { }
  times: any[] = [
    {
      go: '6:15',
      away: '7:15',
    },
    {
      go: '6:45',
      away: '7:45',
    },
    {
      go: '7:15',
      away: '8:30',
    },
    {
      go: '7:45',
      away: '9:00',
    },
    {
      go: '8:30',
      away: '10:15',
    },
    {
      go: '9:00',
      away: '10:45',
    },
  ];
  ngOnInit(): void {
  }

}
