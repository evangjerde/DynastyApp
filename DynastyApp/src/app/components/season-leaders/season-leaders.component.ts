import { Component, OnInit } from '@angular/core';
import { EspnLeaders, Leader } from 'src/app/models/espn.model';
import { EspnApiService } from 'src/app/services/espn-api.service';
import { offensiveStats, StatCategory } from './season-leaders.model';

@Component({
  selector: 'app-season-leaders',
  templateUrl: './season-leaders.component.html',
  styleUrls: ['./season-leaders.component.css']
})
export class SeasonLeadersComponent implements OnInit {

  leaders: EspnLeaders = {} as EspnLeaders;
  statCategories: StatCategory[] = [] as StatCategory[];

  constructor(private espnApi: EspnApiService) { }

  ngOnInit(): void {
    this.espnApi.getLeagueLeaders(2021).subscribe(
      (response) => {
        this.leaders = response as EspnLeaders;
        const categories = this.leaders.leaders.categories;

        categories.forEach(category => {
          console.log(category.displayName);
          if (offensiveStats.includes(category.displayName)) {
            this.statCategories.push({
              name: category.displayName,
              leaders: category.leaders
            })
          }
        })
      }
    );
  }

  getBackground(leader: Leader): { [klass: string]: string } {
    const toRet = { background: `linear-gradient(165deg, #${leader.team.color} 60%, #${leader.team.alternateColor} 60%)` };
    return toRet;
  }

  getStyle(leader: Leader, statValue = false): { [klass: string]: string } {
    let color1 = leader.team.color;
    let color2 = leader.team.alternateColor;
    if (statValue) {
      color1 = color2;
      color2 = leader.team.color;
    }
    return {
      color: this.chooseBestColor(leader, color1, color2)
    };
  }

  chooseBestColor(leader: Leader, bgColor: string, secondColor: string): string {
    const white = 'ffffff';
    const black = '000000';

    const r = Math.abs(parseInt(bgColor.slice(0, 2), 16) - parseInt(secondColor.slice(0, 2), 16));
    const g = Math.abs(parseInt(bgColor.slice(2, 4), 16) - parseInt(secondColor.slice(2, 4), 16));
    const b = Math.abs(parseInt(bgColor.slice(4, 6), 16) - parseInt(secondColor.slice(4, 6), 16));

    if (r + g + b > 50) {
      return '#' + secondColor;
    }

    const rw = Math.abs(parseInt('ff', 16) - parseInt(bgColor.slice(0, 2), 16));
    const gw = Math.abs(parseInt('ff', 16) - parseInt(bgColor.slice(2, 4), 16));
    const bw = Math.abs(parseInt('ff', 16) - parseInt(bgColor.slice(4, 6), 16));

    const rb = Math.abs(parseInt('00', 16) - parseInt(bgColor.slice(0, 2), 16));
    const gb = Math.abs(parseInt('00', 16) - parseInt(bgColor.slice(2, 4), 16));
    const bb = Math.abs(parseInt('00', 16) - parseInt(bgColor.slice(4, 6), 16));

    let wdiff = rw + gw + bw;
    let bdiff = rb + gb + bb;

    return wdiff > bdiff ? '#' + white : '#' + black;
  }

}
