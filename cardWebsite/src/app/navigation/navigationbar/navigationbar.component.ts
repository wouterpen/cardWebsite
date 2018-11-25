import { Component } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent {

  // first one is head item the ones following are subitems
  navbarItemsAndSubitems = [
    {
      title: 'home ',
      link: '/home'
    },
    {
      title: 'about ',
      link: '/about'
    },
    {
      title: 'portfolio ',
      link: '/portfolio',
      children: [
        { title: 'halloween' },
        { title: 'Valentine' },
        { title: 'Birthdays'}
      ]
    }
  ];
}
