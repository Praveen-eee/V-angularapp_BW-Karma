import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { addon } from '../class/addon';
import { AddonserviceService } from '../services/addonservice.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  text1= ' ';
  text2= ' ';

  // addons: addon[] = [];

  // private getAddons(){
  //   this.addservice.getList().subscribe(data=>{
  //     console.log(data);
  //     this.addons = data;
  //   });
  // }

  
  constructor(private data: DataService,private addservice:AddonserviceService) { }

  ngOnInit(): void {
    // this.getAddons()
  }

  // updateText(text1,text2){
  //   this.data.updateData(text1,text2);
  // }
}
