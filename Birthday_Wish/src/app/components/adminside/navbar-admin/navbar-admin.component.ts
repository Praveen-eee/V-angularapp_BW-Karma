import { Component, OnInit } from '@angular/core';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
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
