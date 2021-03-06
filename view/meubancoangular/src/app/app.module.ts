import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { HomeComponent } from './pages/home/home.component';
import { EstudoComponent } from './components/components/estudo/estudo.component';
import { InputLabelComponent } from './components/components/input-label/input-label.component';
import { CheckboxComponent } from './components/components/checkbox/checkbox.component';
import { ButtonComponent } from './components/components/button/button.component';
import { ClientesComponent } from './pages/pages/clientes/clientes.component';
import { CadastrarClientesComponent } from './pages/pages/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContasComponent } from './pages/contas/contas.component';
import { CadastrarContasComponent } from './pages/contas/cadastrar-contas/cadastrar-contas.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExtratoComponent,
    SaqueComponent,
    DepositoComponent,
    HomeComponent,
    EstudoComponent,
    InputLabelComponent,
    CheckboxComponent,
    ButtonComponent,
    ClientesComponent,
    CadastrarClientesComponent,
    ContasComponent,
    CadastrarContasComponent,
    TransferenciaComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
