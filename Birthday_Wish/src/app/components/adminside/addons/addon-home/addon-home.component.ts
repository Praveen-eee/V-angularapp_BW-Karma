import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addon } from 'src/app/class/addon';
import { AddonserviceService } from 'src/app/services/addonservice.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addon-home',
  templateUrl: './addon-home.component.html',
  styleUrls: ['./addon-home.component.css']
})
export class AddonHomeComponent implements OnInit {
  
  faEdit=faEdit;
  faTrash=faTrash;
  addons: addon[] = [];

  private getAddons(){
    this.addservice.getList().subscribe(data=>{
      console.log(data);
      this.addons = data;
    });
  }

  constructor(private router:Router,private addservice:AddonserviceService) { }

  updateadd(addOnid:number){
    this.router.navigate(['admin/addon/updateaddons',addOnid]);
  }

  deleteadd(addOnid:number){
    this.addservice.deleteaddon(addOnid).subscribe(data =>{
      this.getAddons();
    })
  }

  ngOnInit(): void{
    this.getAddons()
  }

}
