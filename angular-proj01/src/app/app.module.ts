import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { VerbalPipe } from './verbal.pipe';
import { StrucDirectiveDemoComponent } from './struc-directive-demo/struc-directive-demo.component';


const routes : Routes = [
  {path: '',component:WelcomeComponent},
  {path:'empForm',component:StrucDirectiveDemoComponent},
  {path:'pipeDemo',component:PipesDemoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PipesDemoComponent,
    VerbalPipe,
    StrucDirectiveDemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
