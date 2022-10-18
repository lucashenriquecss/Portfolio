import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { CardKnowledgeComponent } from './components/card-knowledge/card-knowledge.component';
import { GithubComponent } from './components/github/github.component';
import { CardGithubComponent } from './components/card-github/card-github.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    KnowledgeComponent,
    CardKnowledgeComponent,
    GithubComponent,
    CardGithubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
