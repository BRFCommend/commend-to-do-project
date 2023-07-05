import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent<T> {
  @Input() todo: T;
  @Input() options: string[];

}
