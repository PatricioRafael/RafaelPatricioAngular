import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';

const config = {
  apiKey: "AIzaSyAwcsGJQzmTBwU28ejYrUhJj1QTcrThM78",
  authDomain: "apirest-a36f8.firebaseapp.com",
  databaseURL: "https://apirest-a36f8-default-rtdb.firebaseio.com",
  projectId: "apirest-a36f8",
  storageBucket: "apirest-a36f8.appspot.com",
  messagingSenderId: "984837172495",
  appId: "1:984837172495:web:a8dd5b6cc4196b28e8627a",
  measurementId: "G-K1TSDY8MMN"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
