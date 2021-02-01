import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild} from '@angular/core';


@Component({
  selector: 'app-large-image-card',
  templateUrl: './large-image-card.component.html',
  styleUrls: ['./large-image-card.component.scss']
})
export class LargeImageCardComponent implements OnInit{
  @Input() bodyText: string | undefined;
  @Input() mediaSrc: string | undefined;
  @Input() textColor: string | undefined;
  @Input() isVideo: boolean | undefined;
  // @ts-ignore
  @ViewChild('imageCardWrapper', {read: ElementRef, static: false}) imageCardWrapper: ElementRef;
  @Output() componentHeightEvent = new EventEmitter<number>();
  constructor() {
  }

  // Hacky fix
  ngOnInit(): void {
    let timesRun = 0;
    const interval = setInterval(() => {
      this.componentHeightEvent.emit(this.imageCardWrapper.nativeElement.offsetHeight + 30);
      timesRun += 1;
      if (timesRun === 5) {
        clearInterval(interval);
        return;
      }
    }, 500);
  }
}
