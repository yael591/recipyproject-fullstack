import { Component } from '@angular/core';
import { RecipyService } from '../../services/recipy.service';
import { RecipyClass } from '../../../class/recipy';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-more-details',
  imports: [CommonModule],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})

export class MoreDetailsComponent {

  recipy:RecipyClass={_id:"",recipyLevel:"",recipyName:"",recipySort:"",recipyPic:"",recipyTime:"",recipyUserId:"",ingredients:[]}
 
  constructor(private us:RecipyService,private route:ActivatedRoute,private r:Router) {
     
  }
  back() {
    this.r.navigate(['/'])
    }
  ngOnInit() {
    this.recipy._id=this.route.snapshot.paramMap.get('_id')||'';
   this.us.getRecipyById(this.recipy._id).subscribe(
     (recippy: RecipyClass) => this.recipy = recippy,
     (err: any) => { console.log(err); }
   );
 }
}
