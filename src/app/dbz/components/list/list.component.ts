import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  OnDeleteCharacter(id?: string): void {

    if(!id) return;
    this.onDelete.emit(id);
  }
}
