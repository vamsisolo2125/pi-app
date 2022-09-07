import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SignUpComponent } from './sign-up/sign-up.component';

import {HttpClientModule} from '@angular/common/http';
import { FreeapiService } from './service/freeapi.service';
import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Mock5Component } from './mock5/mock5.component'
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { AllIndiaMockComponent } from './all-india-mock/all-india-mock.component';
import { HelpComponent } from './help/help.component';
import { GeneralInstructionComponent } from './general-instruction/general-instruction.component';
import { SwiperModule } from 'swiper/angular';
import { QuizComponent } from './quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AboutUsComponent,
    SignUpComponent,
    LoginComponent,
    PasswordResetComponent,
    PrivacyComponent,
    TermsComponent,
    DashboardComponent,
    Mock5Component,
    AllIndiaMockComponent,
    HelpComponent,
    GeneralInstructionComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
MatSidenavModule,
MatTabsModule,
MatSelectModule,
NgbModule,
MatFormFieldModule,
CdkAccordionModule,
SwiperModule
  ],
  providers: [FreeapiService],
  bootstrap: [AppComponent],
  
 
})
export class AppModule { }
