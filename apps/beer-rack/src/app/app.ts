import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeerRackDomain } from '@discover/beer-rack-domain';

@Component({
  imports: [RouterModule, BeerRackDomain],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'beer-rack';
}
