import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount({name: accountName,status: accountStatus});
    //console.log('A server status changed, new status: ' + accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }

}
