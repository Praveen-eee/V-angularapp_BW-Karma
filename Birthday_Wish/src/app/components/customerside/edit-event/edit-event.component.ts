import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addon } from 'src/app/class/addon';
import { bookevent } from 'src/app/class/bookevent';
import { AddonserviceService } from 'src/app/services/addonservice.service';
import { BookEventService } from 'src/app/services/bookevent.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventId : number = 0;
  formData: bookevent= new bookevent();
  cost=''  
  totalCost=this.formData.eventCost;
  addOnCost:number=0;
  
  currentPage = 1;
  
  constructor(private router:Router,private bookEventService: BookEventService,private route:ActivatedRoute,
    private ser: AddonserviceService, private data: DataService){

  }
  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['eventId'];
      this.bookEventService.viewEvent(this.eventId).subscribe(data => {
      this.formData = data;
    });
    
    //addon price
    this.ser.getList().subscribe((data)=>{
      this.lis = data;
      console.log(data);
     }
     ) 
     
    //  this.data.share3.subscribe(z => this.cost = z);
    //  this.totalCost=(this.cost);
    //  this.addOnCost=Number(this.totalCost);
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
  //price
  lis : addon[]=[];

   l : Array<number> = []


  //update
  onSubmit(){
    this.bookEventService.editEvent(this.eventId,this.formData).subscribe(data =>{
      this.gotoviewBook();
    })
  }

  gotoviewBook(){
    this.router.navigate(['user/viewbookevent']);
  }

  //addon price
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
    this.formData.eventCost=String(this.addOnCost);
  }



  

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
