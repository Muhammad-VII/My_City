import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzTabScrollListDirective } from 'ng-zorro-antd/tabs/tab-scroll-list.directive';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MedicalComponent implements OnInit {
  constructor() { 
  }

  pharmacies: any[] = [
    {
      name: "Al Ansari Pharmacy",
      describtion: "Al-Ansari Pharmacy is considered one of the oldest pharmacies in the city and provides a distinguished service for people who want to buy a new drug or medicine",
      imgUrl: "https://lh5.googleusercontent.com/p/AF1QipO-x03ooyrImi6-kZaLEDZAASXJbn5WFINftDwA=w408-h408-k-no",
      location: "https://goo.gl/maps/kRpBBiKRYxkAJU5M6"
    },
    {
      name: "Dr.Heba Pharmacy",
      describtion: "Pharmacists are responsible for aiding customers by compounding and/or dispensing prescription medications, providing pharmaceutical information to healthcare professionals, monitoring customers' drug therapies to avoid interactions with other medications",
      imgUrl: "https://lh5.googleusercontent.com/p/AF1QipMX8sen0S0hHdtQWGAKqITPUtqiMM0EtD1Fl-2l=w408-h408-k-no",
      location: "https://goo.gl/maps/6ANLrrRj7ouQN1DY8"
    },
    {
      name: "EL-DOCTOR PHARMACY",
      describtion: "Pharmacists are responsible for aiding customers by compounding and/or dispensing prescription medications, providing pharmaceutical information to healthcare professionals, monitoring customers' drug therapies to avoid interactions with other medications",
      imgUrl: "assets/category-details/download.jpg",
      location: "https://goo.gl/maps/RMMAoMnG412FXGjAA"
    }
  ]

  ngOnInit(): void {
  }

}
