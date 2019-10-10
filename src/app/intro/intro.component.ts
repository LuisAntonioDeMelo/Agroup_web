import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IntroComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
    setTimeout(()=> {
      this.router.navigate(['/login']);
    },5000);
  }

}
