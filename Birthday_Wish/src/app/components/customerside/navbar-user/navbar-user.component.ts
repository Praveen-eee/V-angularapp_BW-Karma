import { Component, OnInit } from '@angular/core';
import { faBirthdayCake, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  faBirthdayCake = faBirthdayCake;
  faSignOutAlt=faSignOutAlt;
  constructor() { }

  ngOnInit(): void {
  }
  logoutalrt()
  {
    alert("Successfully Logged Out");
  }
}
