import {Component, Input} from '@angular/core';
import {CarouselCellModel} from '../model/CarouselCellModel';



@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {
  @Input() cells: CarouselCellModel[] | undefined;
  @Input() isTallCard: boolean | undefined;
  // @ts-ignore

  mobWidth: any;
  height: any;

  constructor() {
  }
  setHeight(event: number): void {
    this.height = event;
  }
}
