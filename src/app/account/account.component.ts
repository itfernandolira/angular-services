import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name?: string, status?: string} = {};
  @Input() id: number = 0;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    this.loggingService.logStatusChange(status);
  }

}
