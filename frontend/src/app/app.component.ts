import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'myp';
  flag:boolean=false
}
