

import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PersonInfoComponent } from './home-components/person-info/person-info.component';
import { ClientComponent } from './home-components/client/client.component';
import { AdvisorComponent } from './home-components/advisor/advisor.component';
import { ContractsComponent } from './home-components/contracts/contracts.component';
import { AdvisorsComponent } from './home-components/advisors/advisors.component';
import { ClientsComponent } from './home-components/clients/clients.component';
import { ContractComponent } from './home-components/contract/contract.component';
import { TableHeaderComponent } from './home-components/table-header/table-header.component';
import { TableDataComponent } from './home-components/table-data/table-data.component';
import { DetailsComponent } from './home-components/details/details.component';
import { CardsComponent } from './home-components/cards/cards.component';
import { CardComponent } from './home-components/card/card.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ContractRegistrationComponent } from './home-components/contract-registration/contract-registration.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    ContractRegistrationComponent,
    PersonInfoComponent,
    ClientComponent,
    AdvisorComponent,
    ContractsComponent,
    AdvisorsComponent,
    ClientsComponent,
    ContractComponent,
    TableHeaderComponent,
    TableDataComponent,
    DetailsComponent,
    CardComponent,
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
