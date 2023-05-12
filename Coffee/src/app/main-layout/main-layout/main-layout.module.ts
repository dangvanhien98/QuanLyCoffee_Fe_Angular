import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [SharedModule, HttpClientModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
