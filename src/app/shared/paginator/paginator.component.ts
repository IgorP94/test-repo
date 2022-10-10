import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() pageSize: number = 0;
  @Input() page: number = 1;
  @Input() collectionSize: number = 0;
  @Output() inputPageEvent = new EventEmitter<number>();

  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.setPageValue();
  }

  ngOnChanges(): void {
    this.setPageValue();
  }

  sendPageValue(value: number) {
    this.inputPageEvent.emit(value);
  }

  private setPageValue() {
      this.currentPage = this.page;
  }
}
