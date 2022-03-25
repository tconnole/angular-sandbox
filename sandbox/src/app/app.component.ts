import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

export const Routes = new Map([
  ['/dice-rollers', 'Dice Rollers']
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public selectedComponent='';

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof RouterEvent && event.url) {
        this.selectedComponent = Routes.get(event.url) ?? '';
      }
    })
  }

  public lightTheme = true;
  title = 'sandbox';
}
