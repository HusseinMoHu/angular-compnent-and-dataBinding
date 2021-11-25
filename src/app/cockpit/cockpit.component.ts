import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // binding event => send data from child component to parent component
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // binding event => send data from child component to parent component
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName: string;
  newServerContent: string;

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
