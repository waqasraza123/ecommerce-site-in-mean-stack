import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit,OnChanges  {
  @Input() item;

  constructor() { 
    console.log(this.item);
  }

  ngOnInit() {
  }
  ngOnChanges(){

  }

}
