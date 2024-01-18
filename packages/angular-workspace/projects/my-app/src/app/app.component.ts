import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  onSimpleEvent(event: unknown) {
    console.log("Simple event", event)
  }

  onObjectEvent(event: unknown) {
    console.log("Object event", event)
  }
}
