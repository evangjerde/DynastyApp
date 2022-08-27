import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivityLogComponent } from './components/activity-log/activity-log.component';
import { PipesModule } from './pipes/pipes.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { OwnerComponent } from './owners/owner/owner.component';
import { NflNewsComponent } from './components/nfl-news/nfl-news.component';
import { SeasonLeadersComponent } from './components/season-leaders/season-leaders.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NflPageComponent } from './nfl-page/nfl-page.component';
import { TradeActionComponent } from './components/activity-log/trade-action/trade-action.component';
import { ArticlesComponent } from './articles/articles.component';
import { Rankings2022PsComponent } from './articles/rankings2022-ps/rankings2022-ps.component';
import { StandingsComponent } from './components/standings/standings.component';
import { StandingComponent } from './components/standings/standing/standing.component';
import { LeagueScoreboardComponent } from './components/league-scoreboard/league-scoreboard.component';
import { MatchupComponent } from './components/league-scoreboard/matchup/matchup.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    HomepageComponent,
    ActivityLogComponent,
    NavBarComponent,
    FooterComponent,
    LogoComponent,
    OwnerComponent,
    NflNewsComponent,
    SeasonLeadersComponent,
    CarouselComponent,
    NflPageComponent,
    TradeActionComponent,
    ArticlesComponent,
    Rankings2022PsComponent,
    StandingsComponent,
    StandingComponent,
    LeagueScoreboardComponent,
    MatchupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    BrowserAnimationsModule,
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
