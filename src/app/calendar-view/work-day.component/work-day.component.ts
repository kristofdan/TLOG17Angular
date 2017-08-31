import { Component, Input } from '@angular/core';
import {Day} from '../../shared/classes/day';
import {PopupService} from "../../shared/services/popup.service/popup.component";

@Component({
  selector: 'work-day',
  templateUrl: './work-day.component.html',
  styleUrls: ['./work-day.component.css'],
})

export class WorkDayComponent {

  @Input() day: Day;
}
