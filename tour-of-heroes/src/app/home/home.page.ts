import { Component, setTestabilityGetter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Tour of Heroes'

  constructor() {}

  ionViewDidEnter()
  {
    document.title = this.title;
  }

}
