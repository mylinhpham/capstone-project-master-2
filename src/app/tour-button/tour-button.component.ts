import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tour-button',
  templateUrl: './tour-button.component.html',
  styleUrls: ['./tour-button.component.scss']
})
export class TourButtonComponent implements OnInit {
  @Input() iconSvg: string | undefined;
  @Input() buttonText: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
