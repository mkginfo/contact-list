import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactListComponent } from './pages/contacts-page/components/contact-list/contact-list.component';
import { ContactFiltersComponent } from './pages/contacts-page/components/contact-filters/contact-filters.component';
import { ContactDetailsComponent } from './pages/contacts-page/components/contact-details/contact-details.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactFiltersComponent,
    ContactDetailsComponent,
    ContactsPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
