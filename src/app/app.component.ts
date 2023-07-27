import { Component } from '@angular/core';
import { NavbarComponent } from '@core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host {width: 100%;}']
})
export class AppComponent {
  title = 'portfolio';
}
