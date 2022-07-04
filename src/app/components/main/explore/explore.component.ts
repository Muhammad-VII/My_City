import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const ol: any;
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExploreComponent implements OnInit {
  pageTitle: string = 'Explore';
  constructor() {}

  categories: any[] = [
    {
      imgUrl: 'medical.png',
      title: "Medical",
      routerLink: 'medical',
      describtion:[
        {title: "Hospitals", numberOfItems: "3"},
        {title: "Clinics", numberOfItems: "4"},
        {title: "Pharmacies", numberOfItems: "8"}
      ]
    },

    {
      imgUrl: 'food.png',
      title: "Food",
      routerLink: 'food',
      describtion:[
        {title: "Resturants", numberOfItems: "14"},
        {title: "Cafes", numberOfItems: "6"},
        {title: "Food Cars", numberOfItems: "10"}
      ]
    },

    {
      imgUrl: 'services.png',
      title: "Services",
      routerLink: 'services',
      describtion:[
        {title: "Home care", numberOfItems: "14"},
        {title: "Car repair", numberOfItems: "6"},
      ]
    },

    {
      imgUrl: 'shopping-category.png',
      title: "Shopping",
      routerLink: 'shopping',
      describtion:[
        {title: "Malls", numberOfItems: "5"},
        {title: "Supermarkets", numberOfItems: "2"},
        {title: "Stores", numberOfItems: "17"}
      ]
    },

    {
      imgUrl: 'entertainment.png',
      title: "Entertainment",
      routerLink: 'entertainment',
      describtion:[
        {title: "Gardens", numberOfItems: "3"},
        {title: "Amusement Parks", numberOfItems: "3"},
        {title: "Cinemas", numberOfItems: "1"}
      ]
    },
  ];

  scrollDown():void {
    const articleOffset: number = document.getElementById('explore-section')!.offsetTop;
    window.scrollTo(0, articleOffset);
  }

  ngOnInit(): void {}
}
