import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from './global/Constants';
import {CarouselCellModel} from './model/CarouselCellModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capstone-project';
  constant: GlobalConstants = new GlobalConstants();
  public placeholderModel: CarouselCellModel[];

  constructor() {
    // TODO - Temp model for testing
    this.placeholderModel = [
      {
        mediaSrc: this.constant.STOCK_STAFF,
        title: this.constant.TEAM_SAMPLE_TEXT,
        subtitle: this.constant.TEAM_SAMPLE_SUBTEXT,
        text: this.constant.TEAM_SAMPLE_MAINTEXT,
      },
      {
        mediaSrc: this.constant.STOCK_STAFF,
        title: this.constant.TEAM_SAMPLE_TEXT,
        subtitle: this.constant.TEAM_SAMPLE_SUBTEXT,
        text: this.constant.TEAM_SAMPLE_MAINTEXT,
      },
      {
        mediaSrc: this.constant.STOCK_STAFF,
        title: this.constant.TEAM_SAMPLE_TEXT,
        subtitle: this.constant.TEAM_SAMPLE_SUBTEXT,
        text: this.constant.TEAM_SAMPLE_MAINTEXT,
      }
      ];
  }

  OnInit(): void {
  }
}
