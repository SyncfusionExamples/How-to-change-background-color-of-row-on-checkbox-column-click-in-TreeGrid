
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ CommonModule, TreeGridAllModule, ReactiveFormsModule, FormsModule,BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
