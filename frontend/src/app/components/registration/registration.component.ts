import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserClass } from '../../../class/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-registration',
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  user:UserClass={nameUser:"",addressUser:"",isManager:false,myRecipies:[],passUser:"",phoneUser:""}
  singleRecipy: string = "";
  constructor(private us:UserService,private router:Router) {
   

  }



addRecipy() {
  if (this.singleRecipy.trim()) {
    this.user.myRecipies.push(this.singleRecipy.trim());
    this.singleRecipy = '';
  }
}

removeRecipy(index: number) {
  this.user.myRecipies.splice(index, 1);
}
  keepAndAddUser() {
    this.us.add(this.user).subscribe({
      next: () => {
        this.us.setUsername(this.user.nameUser);
        this.router.navigate(['/']);
      },
      error: err => {
        console.error('שגיאה בהרשמה:', err);
        if (err.status === 400 && err.error?.errors) {
          // שגיאת ולידציה ממונגוס
          const messages = Object.values(err.error.errors).map((e: any) => e.message);
          alert("שגיאה בהרשמה: " + messages.join(", "));
        } else {
          alert("שגיאה כללית בהרשמה. נסה שוב.");
        }
      }
    });
  }
  

}
