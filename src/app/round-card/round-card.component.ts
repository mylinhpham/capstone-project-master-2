import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-round-card',
  templateUrl: './round-card.component.html',
  styleUrls: ['./round-card.component.scss']
})
export class RoundCardComponent implements OnInit {

  @Input() cardHeader: string | undefined;
  @Input() cardMainText: string | undefined;
  @Input() buttonText: string | undefined;
  @Input() headerColor: string | undefined;
  @Input() textColor: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
