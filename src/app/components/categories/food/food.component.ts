import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor() { }
  resturants: any[] = [
    {
      name: "McDonald's Shorouk City",
      describtion: "Classic, long-running fast-food chain known for its burgers & fries",
      imgUrl: "https://www.albayan.ae/polopoly_fs/1.4184185.1623421704!/image/image.jpg",
      address: "Terrace Mall, Sadat Rd",
      location:"https://goo.gl/maps/4GyRvNtHLW1kABAP7",
      workingHours: "9:00 AM - 10:00 PM",
      phone: "0221600377",
    },

    {
      name: "Shatshot Pizza",
      describtion: "Pizza, Crepe, Pasta and a lot more with special prices",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Mj1nMNVYiDLlxG-GmKOxieALjzkirtkLiA&usqp=CAU",
      address: "Paradise Mall, Gamal Abd El-Nasser Rd",
      location:"https://goo.gl/maps/cFeD2RBzngavuy8V9",
      workingHours: "9:00 AM - 10:00 PM",
      phone: "01022450455",
    },

    {
      name: "Sham El-Ezz",
      describtion: "Best Syrien Shawarma in town",
      imgUrl: "https://10619-2.s.cdn12.com/rests/original/110_502271596.jpg",
      address: "Town Center Mall, Shabab Rd",
      location:"https://goo.gl/maps/phuiYFDtJmeXPJ7H9",
      workingHours: "9:00 AM - 10:00 PM",
      phone: "01067777233",
    },
  ]

  cafes: any[] = [
    {
      name: "Omar Cafe",
      describtion: "Classic coffee shop with great background music",
      imgUrl: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/245532579_1532876103749031_39575189267679679_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lIrs8I1aQlAAX9EhK2V&tn=AH-7GzH7qz-B6oiq&_nc_ht=scontent.fcai19-7.fna&oh=00_AT_FUag1SvmBqwxILzsYREVgh0XvMkop2vpSpuF4FqGk1A&oe=62C7CEC2",
      address: "Carrefour Shorouk, Sky Plaza Mall, Shuhada Rd",
      location:"https://goo.gl/maps/4GyRvNtHLW1kABAP7",
      workingHours: "9:00 AM - 10:00 PM",
      phone: "0221600377",
    },
  ]

  foodCars: any[] = [
    {
      name: "Egypt's Street",
      describtion: "A unique, modern, and stylish collection of food cars all in one place with great service",
      imgUrl: "https://gate.ahram.org.eg/Media/News/2018/7/4/19_2018-636663206723671933-367.jpg",
      address: "Located behind EL Shorok City centeral",
      location:"https://goo.gl/maps/fJMSBD3sCNmnvsZd7",
      workingHours: "9:00 AM - 11:00 PM",
    },
  ]
  ngOnInit(): void {
  }

}
