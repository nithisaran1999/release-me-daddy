import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReleaseMeDaddyComponent } from '../../../release-me-daddy/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReleaseMeDaddyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'release-me-daddy-showcase';
}
