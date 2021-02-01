import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalConstants} from '../global/Constants';

@Component({
  selector: 'app-vert-nav',
  templateUrl: './vert-nav.component.html',
  styleUrls: ['./vert-nav.component.scss']
})
export class VertNavComponent implements OnInit {
  @ViewChild('myNav') myNav: any;
  constant: GlobalConstants = new GlobalConstants();

  constructor() {

  }

  ngOnInit(): void {
  }

  openNav(): void {
    this.myNav.nativeElement.style.width = '100%';
  }

  closeNav(): void {
    this.myNav.nativeElement.style.width = '0%';
  }
}
