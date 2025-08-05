import { Component } from '@angular/core';
import { RecipyService } from '../../services/recipy.service';
import { RecipyClass } from '../../../class/recipy';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-recipy',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-recipy.component.html',
  styleUrl: './add-recipy.component.css'
})
export class AddRecipyComponent {
   newRecipy:any={recipyUserId:"",recipyLevel:"",recipyName:"",recipyPic:"",recipySort:"",recipyTime:"",ingredients:[{name:"",quantity:""}]}
   constructor(private rs:RecipyService) {
   

   }

   toAddRecpy(){
    this.rs.add(this.newRecipy).subscribe({
      next: (success: boolean) => {
        if (success) {
          alert('המתכון נוסף בהצלחה!');
        } else {
          alert('המתכון לא נוסף - נסי שוב.');
        }
      },
      error: (err) => {
        console.error(err);
        alert('שגיאה בשליחה לשרת');
      }
    });
  }
}
