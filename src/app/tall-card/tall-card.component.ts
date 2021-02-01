import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';


@Component({
  selector: 'app-tall-card',
  templateUrl: './tall-card.component.html',
  styleUrls: ['./tall-card.component.scss']
})
export class TallCardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() mainText: string | undefined;
  @Input() mediaSrc: string | undefined;
  // @ts-ignore
  @ViewChild('cardWrapper', {read: ElementRef, static: false}) cardWrapper: ElementRef;
  @Output() componentHeightEvent = new EventEmitter<number>();
  constructor() {
  }

  // Hacky fix
  ngOnInit(): void {
    let timesRun = 0;
    const interval = setInterval(() => {
      this.componentHeightEvent.emit(this.cardWrapper.nativeElement.offsetHeight + 10);
      timesRun += 1;
      if (timesRun === 5) {
        clearInterval(interval);
        return;
      }
    }, 500);
  }
}
