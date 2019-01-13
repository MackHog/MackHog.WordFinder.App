import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [NgbActiveModal ],
  bootstrap: [AppComponent],
  exports: [
    ReactiveFormsModule 
  ]
})
export class AppModule { }