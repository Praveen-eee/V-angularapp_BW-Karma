import { Component, OnInit } from '@angular/core';
import { Addmenu } from '../../../../class/addmenu';
import { AddmenuserviceService } from '../../../../services/addmenuservice.service';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-addmenu-home',
  templateUrl: './addmenu-home.component.html',
  styleUrls: ['./addmenu-home.component.css']
})
export class AddmenuHomeComponent implements OnInit {

  faEdit=faEdit;
  faTrash=faTrash;
  addmenus: Addmenu[] = [];

  constructor(private router:Router, private addmenuService: AddmenuserviceService){}

  ngOnInit(): void {
      this.getAddmenus();
  }


  private getAddmenus(){
    this.addmenuService.getAddMenu().subscribe(data => {
      console.log(data)
      this.addmenus = data;
    });
  }

  updateFoodMenu(foodMenuID: number){
    this.router.navigate(['admin/addmenu/Updateaddmenu',foodMenuID]);
  }

  deleteFoodMenu(foodMenuID: number){
    this.addmenuService.deleteAddMenu(foodMenuID).subscribe( data => {
      this.getAddmenus();
    })
  }


}
