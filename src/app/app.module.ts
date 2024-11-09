import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PlantModule } from './plant/plant.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PlantService } from './service/plant.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    PlantModule,
    RouterModule,
  ],
  providers: [PlantService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  
})
export class AppModule { }
