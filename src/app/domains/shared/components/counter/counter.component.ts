import { Component, Input, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor(){
    //no async
    //before render
    console.log('constructor');
    console.log('-', repeat(10));
  }

  ngOnChanges(change: SimpleChange){
    //before and during render
    console.log('ngOnChanges');
    console.log('-', repeat(10));
    console.log(change);
  }
}
