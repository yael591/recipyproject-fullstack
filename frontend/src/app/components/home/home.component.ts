import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RecipyService } from '../../services/recipy.service';
import { RecipyClass } from '../../../class/recipy';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   arr:Array<RecipyClass>=new Array<RecipyClass>()
  
   constructor(private us:RecipyService) {
     
   }
   ngOnInit() {
    this.us.getAll().subscribe(
      (data: Array<RecipyClass>) => this.arr = data,
      (err: any) => { console.log(err); }
    );
  }

 
  
}
