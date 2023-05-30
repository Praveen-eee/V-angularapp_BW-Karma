import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Theme } from 'src/app/class/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-home',
  templateUrl: './theme-home.component.html',
  styleUrls: ['./theme-home.component.css']
})
export class ThemeHomeComponent {

  newtheme: Theme = new Theme();
  constructor(private themeService: ThemeService,
    private router: Router){ }


  ngOnInit(): void {  
  }

  saveTheme(){
    this.themeService.storeTheme(this.newtheme).subscribe( data => {
      console.log(data);
      this.gotoTheme();
    },
    error => console.log(error));
  }

  gotoTheme(){
    this.router.navigate(['/admin/'])
  }

  onSubmit(){
    console.log(this.newtheme);
    this.saveTheme();
  }

 



 

}
