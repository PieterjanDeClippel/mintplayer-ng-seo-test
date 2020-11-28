import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { BASE_URL } from '@mintplayer/ng-base-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(BASE_URL) private baseUrl: string) {
    console.log(baseUrl);
  }

  title = 'ng-base-url-testje';
}
