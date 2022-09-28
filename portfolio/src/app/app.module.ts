import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AboutComponent } from './components/about/about.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { CardKnowledgeComponent } from './components/card-knowledge/card-knowledge.component';
import { GithubComponent } from './components/github/github.component';
import { CardGithubComponent } from './components/card-github/card-github.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    AboutComponent,
    KnowledgeComponent,
    CardKnowledgeComponent,
    GithubComponent,
    CardGithubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
