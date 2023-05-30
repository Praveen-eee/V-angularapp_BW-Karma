import { Component, OnInit } from '@angular/core';
import { BookEventService } from '../../../services/bookevent.service';
import { AddonserviceService } from 'src/app/services/addonservice.service';
import { addon } from 'src/app/class/addon';
import { DataService } from 'src/app/services/data.service';
import { bookevent } from '../../../class/bookevent';
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  name='';
  loc='';
  cost='';
  totalCost='';
  currentPage = 1;
  addOnCost:number=0;

  
  bookevent: bookevent= new bookevent();
  theme:Theme= new Theme();
  // private z:number;
   //addon table checkbox
   lis : addon[]=[];

   l : Array<number> = []

  constructor(private bookEventService: BookEventService,private ser: AddonserviceService,
    private data: DataService, private router: Router) {}

  ngOnInit():void {
    //addon
    this.ser.getList().subscribe((data)=>{
      this.lis = data;
      console.log(data);
     }
     ) 
     //themName bind
     
     this.data.share1.subscribe(x => this.name = x);
     this.data.share2.subscribe(y => this.loc = y);
     this.data.share3.subscribe(z => this.cost = z);
     this.bookevent.eventName=this.name;
     this.bookevent.eventAddress=this.loc;
     this.totalCost=(this.cost);
     console.log(this.bookevent.eventName);
     console.log(this.bookevent.eventAddress);
     console.log(this.totalCost);
     this.addOnCost=Number(this.totalCost);
  
  }

  nextPage() {
    if (this.currentPage < 2) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  
  onSubmit(){
    console.log(this.bookevent);
    this.saveBookevent();
  }

  saveBookevent(){
    this.bookEventService.bookEvent(this.bookevent).subscribe( data => {
      console.log(data);
      this.gotoViewBook();
    },
    error => console.log(error));
  }

  gotoViewBook(){
    this.router.navigate(['/user/viewbookevent'])
  }
 //addon table

  Nothing(id:number){
    
    console.log("Clicked");
    if(!(this.l.includes(id))){
    console.log(id);
    this.l.push(id);
    this.adding(id);
    
    }
    else{
      console.log(id);
      this.subtract(id);
      this.l.splice(this.l.indexOf(id),1);
      
    }
    console.log(this.addOnCost);
    this.bookevent.eventCost=String(this.addOnCost);
  }


  
  // addOnCost : number = Number(this.totalCost);
  // addOnCost:number=0;
  
  adding(i : number){

    for(let index = 0; index < this.lis.length; index++){
      if(this.lis[index].addOnid == i){
        console.log(index)
    console.log(this.lis[index].addAddonPrice);
   this.addOnCost += (Number(this.lis[index].addAddonPrice));
      }
    }
    
     
  }

  subtract(i: number){
    for(let index = 0; index < this.lis.length; index++){
      if(this.lis[index].addOnid == i){
    console.log(index)
    console.log(this.lis[index].addAddonPrice);
   this.addOnCost -= (Number(this.lis[index].addAddonPrice));
      }
    }
  
  }




}
