import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() dropdownItems: Array<string> | undefined;
  @Input() selectedItem: string | undefined;
  @Input() defaultDropDownOption: string | undefined;
  @Input() disabled = false;
  @Output() dropdownSelection = new EventEmitter<string>();

  dropdownItemSelected($event: any) {
    this.selectedItem = $event.target.value;
    this.dropdownSelection.emit(this.selectedItem);
  }

}
