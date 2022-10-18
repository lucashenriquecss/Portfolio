import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { CardKnowledgeComponent } from './components/card-knowledge/card-knowledge.component';
import { GithubComponent } from './components/github/github.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    KnowledgeComponent,
    CardKnowledgeComponent,
    GithubComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
