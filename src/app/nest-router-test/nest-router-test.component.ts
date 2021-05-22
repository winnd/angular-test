import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationExtras } from '@angular/router'

@Component({
  selector   : 'app-nest-router-test',
  templateUrl: './nest-router-test.component.html',
  styleUrls  : ['./nest-router-test.component.css'],
})
export class NestRouterTestComponent implements OnInit {

  constructor(
   private route: ActivatedRoute,
   // private  router: NavigationExtras,
  ) {
  }

  ngOnInit(): void {
  }

  // goToItems() {
  //   this.router.navigate(['items'], {relativeTo: this.route})
  // }
}
