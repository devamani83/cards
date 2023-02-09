import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree', 
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today.'
    },
    {
      title: 'Snowy Mountain', 
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountain121',
      content: 'Saw this awesome snowy mountain today.'
    },
    {
      title: 'Biking', 
      imageUrl: 'assets/biking.jpeg',
      username: 'bikingperson',
      content: 'I did some biking today.'
    }
  ];
}
