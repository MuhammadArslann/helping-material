import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent } from './Server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BasicDirDirective } from './basic-dir.directive';
import { BetterDirDirective } from './better-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    BasicDirDirective,
    BetterDirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
