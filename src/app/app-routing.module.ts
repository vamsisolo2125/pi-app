import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Testcanactivate } from './gaurd';
import { Mock5Component } from './mock5/mock5.component'
import { AllIndiaMockComponent } from './all-india-mock/all-india-mock.component'
import { HelpComponent } from './help/help.component'
import { GeneralInstructionComponent } from './general-instruction/general-instruction.component'
const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'content', component: ContentComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'sign', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'password', component: PasswordResetComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'mock5', component: Mock5Component},
  {path: 'allindia', component: AllIndiaMockComponent},
  {path: 'help', component: HelpComponent},
  {path: 'general', component: GeneralInstructionComponent},
  {path:'',component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
