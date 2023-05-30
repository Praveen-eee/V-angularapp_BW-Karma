import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  text1='';
  text2=' ';
  constructor(private data: DataService) {}
  
  
  ngOnInit(): void {
    this.data.share1.subscribe(x => this.text1 = x);
    this.data.share2.subscribe(y => this.text2 = y);
  }

  onSubmit(): void {
   
  }

}
