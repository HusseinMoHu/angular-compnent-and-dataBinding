import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // Goal: create custom event
  // @Output() => send data to parent component
  // binding event => send data from child component to parent component
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // Goal: create custom event
  // @Output() => send data to parent component
  // binding event => send data from child component to parent component
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // properties
  // newServerName: string; // Replaced from ngModel to Local Reference Variable
  newServerContent: string;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    // onAddServer => trigger serverCreated event to emit data from child to parent
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // onAddBlueprint => trigger serverCreated event to emit data from child to parent
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }
}
