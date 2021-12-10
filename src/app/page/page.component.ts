import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(route : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.router.navigate([''])
  }

}
