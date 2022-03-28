import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name?: string, status?: string} = {};
  @Input() id: number = 0;
  

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus({id: this.id, newStatus: status})
    //console.log('A server status changed, new status: ' + status);
    //this.loggingService.logStatusChange(status);
  }

}
