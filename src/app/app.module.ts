import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { SSListPageComponent } from './components/SSListPage/SSListPage/SSListPage.component';
import { HeaderComponent } from './components/share/Header/Header.component';
import { SideMenuComponent } from './components/share/SideMenu/SideMenu.component';
import { FooterComponent } from './components/share/Footer/Footer.component';
import { SSCardComponent } from './components/SSListPage/SSCard/SSCard.component';
import { SSTagComponent } from './components/SSListPage/SSTag/SSTag.component';
import { SSViewSelectButtonGroupComponent } from './components/SSListPage/SSViewSelectButtonGroup/SSViewSelectButtonGroup.component';
import { SSSearchFormComponent } from './components/SSListPage/SSSearchForm/SSSearchForm.component';
import { PaginationButtonGroupComponent } from './components/SSListPage/PaginationButtonGroup/PaginationButtonGroup.component';
import { SSViewPageComponent } from './components/SSViewPage/SSViewPage/SSViewPage.component';
import { TagListPageComponent } from './components/TagListPage/TagListPage/TagListPage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    SSListPageComponent,
    SSCardComponent,
    SSTagComponent,
    SSViewSelectButtonGroupComponent,
    SSSearchFormComponent,
    PaginationButtonGroupComponent,
    SSViewPageComponent,
    TagListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
    MatProgressBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
