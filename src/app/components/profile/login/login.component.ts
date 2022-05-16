import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#login-button").click(function(event: any){
      event.preventDefault();
    
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
 });
  }

}
