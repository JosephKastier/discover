import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Rack } from '@discover/rack';

@Component({
  imports: [RouterModule, Rack],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'beer-rack';
}
