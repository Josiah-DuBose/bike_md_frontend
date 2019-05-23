import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public nav: NavBarService) { }

  ngOnInit() {
  }

}
