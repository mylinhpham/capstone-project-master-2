import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-round-info-card',
  templateUrl: './round-info-card.component.html',
  styleUrls: ['./round-info-card.component.scss']
})
export class RoundInfoCardComponent implements OnInit {
  @Input() cardHeader: string | undefined;
  @Input() cardMainText: string | undefined;
  @Input() headerColor: string | undefined;
  @Input() textColor: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
