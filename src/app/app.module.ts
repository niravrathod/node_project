import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToolbarModule, ToolbarAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule , CheckBoxAllModule} from '@syncfusion/ej2-angular-buttons';

import { DatePickerModule, DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule, TextBoxAllModule,ColorPickerAllModule } from '@syncfusion/ej2-angular-inputs';

import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { SettingsService } from './settings.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({ declarations: [ AppComponent ], imports: [ HttpClientModule,CommonModule, HttpModule, TreeGridAllModule,       ColorPickerAllModule,TextBoxAllModule,NumericTextBoxAllModule, ToolbarModule, DropDownListAllModule, ButtonAllModule, DialogModule, MultiSelectAllModule, CheckBoxAllModule, DateRangePickerModule,ReactiveFormsModule, FormsModule, DatePickerModule, SparklineAllModule, BrowserModule], providers: [ConfigService,SettingsService], bootstrap: [AppComponent]
})
export class AppModule { }
