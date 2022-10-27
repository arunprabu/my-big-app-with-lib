import { Component, OnInit } from '@angular/core';
import { MyWeatherLibService } from './my-weather-lib.service';

@Component({
  selector: 'mwl-my-weather-lib',
  template: `
    <div>
      <h2>Weather Info</h2>
      <p>Weather in: {{weather.name}}</p>
      <p>Temperature: {{weather.main.temp}}</p>
    </div>
  `,
  styles: [
  ]
})
export class MyWeatherLibComponent implements OnInit {

  weather: any;

  constructor(private weatherService: MyWeatherLibService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherUpdates()
      .subscribe( (res: any) => {
        console.log(res);
        this.weather = res;
      })
  }

}
