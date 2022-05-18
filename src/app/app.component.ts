import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //html tag used to embed component - this is the root. all our components will be embedded into the app component html
  templateUrl: './app.component.html', //the html file that you're using
  styleUrls: ['./app.component.css'] //you can have more than one, but this is your styles.
})
export class AppComponent {
 //any properties or methods of the component.
}
