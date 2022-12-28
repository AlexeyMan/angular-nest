import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {
  menu: NbMenuItem[] = [
    {
      title: 'Главная',
      icon: 'home-outline',
      link: '',
      home: true,
    },
    {
      title: 'Тарифы',
      icon: 'layout-outline',
      link: '',
      home: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
