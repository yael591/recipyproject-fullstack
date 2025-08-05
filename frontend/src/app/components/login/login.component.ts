import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userLogin = {
    nameUser: '',
    passUser: ''
  };
  
  constructor(private us:UserService,private router:Router) {
   
    
  }

  toLogin() {
    this.us.login(this.userLogin.nameUser, this.userLogin.passUser).subscribe({
      next: user => {
        console.log('התחברות הצליחה:', user);
       if(this.userLogin.nameUser==="יעל יוליארד"){
          user.nameUser="מנהל"
       }
        this.us.setUsername(user.nameUser)
        alert(`hellow:${this.us.getUsername()}`)
        this.router.navigate(['/']); // חזרה לדף הבית
      },
      error: err => {
        alert('עליך להרשם תחילה');
        this.router.navigate(['/resinger'])
      }
    });
  }

}
