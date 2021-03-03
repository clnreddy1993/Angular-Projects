import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Account } from '../model/account';
import { TariffPlan } from '../model/tariff-plan';
import { TariffPlanService } from '../service/tariff-plan.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  account:Account;
  plans:TariffPlan[];

  @Output()
  onAddaccount : EventEmitter<Account>;

  constructor(
    private planService:TariffPlanService
  ) { 
    this.account = {
      id:0,
      mobileNumber:'',
      planId:0
    };
    this.onAddaccount= new EventEmitter();
  }

  ngOnInit(): void {
    this.planService.getAll().subscribe(
      (data)=>{this.plans=data;}
    );
  }

  formsubmitted(){
    this.onAddaccount.emit(this.account);
    this.account ={
      id:0,
      mobileNumber:'',
      planId:0
    }
  }

}