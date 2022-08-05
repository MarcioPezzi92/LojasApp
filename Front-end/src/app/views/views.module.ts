import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class ViewsModule {}
