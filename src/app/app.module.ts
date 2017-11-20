import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';

import { PersonsFilterPipe } from './shared/filter.pipe';
import { PersonsService } from './shared/persons.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    PersonsFilterPipe,
    DetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatSidenavModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule.forRoot([
        {
            path: 'list',
            component: GalleryComponent
        },
        {
            path: 'detail/:id',
            component: DetailComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
    ])
  ],
  providers: [PersonsService, PersonsFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
