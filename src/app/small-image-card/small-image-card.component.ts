import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-image-card',
  templateUrl: './small-image-card.component.html',
  styleUrls: ['./small-image-card.component.scss']
})
export class SmallImageCardComponent implements OnInit {
  @Input() imgSrc: string | undefined;
  @Input() cardHeader: string | undefined;
  @Input() subText: string | undefined;
  @Input() subTextColor: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
