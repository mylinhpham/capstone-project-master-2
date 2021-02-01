import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { SlideInOutAnimation } from '../global/animations';
@Component({
  selector: 'app-small-card-expand',
  templateUrl: './small-card-expand.component.html',
  styleUrls: ['./small-card-expand.component.scss'],
  animations: [SlideInOutAnimation],
})
export class SmallCardExpandComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: any;
  @Input() mainText: string | undefined;
  @Input() expandedText: string | undefined;
  @Input() mainTextColor: string | undefined;
  isExpanded: boolean | undefined;
  animationState = 'out';
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleExpanded(): void {
    this.toggleButton.nativeElement.style = this.isExpanded === true ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)';
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
    this.isExpanded = !this.isExpanded;
  }
}
