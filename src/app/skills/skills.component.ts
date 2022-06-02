import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let skills = [
      {
        'skillName': 'Javascript',
        'skillImg': 'src/assets/img/javascript.png'
      },
      {
        'skillName': 'Angular',
        'skillImg': 'src/assets/img/javascript.png'
      },
      {
        'skillName': 'HTML / CSS',
        'skillImg': 'src/assets/img/javascript.png'
      },
      {
        'skillName': 'SCRUM',
        'skillImg': 'src/assets/img/javascript.png'
      },
      {
        'skillName': 'Git',
        'skillImg': 'src/assets/img/javascript.png'
      },
      {
        'skillName': 'Design Thinking',
        'skillImg': 'src/assets/img/javascript.png'
      },
      {
        'skillName': 'Rest API',
        'skillImg': 'src/assets/img/javascript.png'
      },
      {
        'skillName': 'Test Automation',
        'skillImg': 'src/assets/img/javascript.png'
      }, {
        'skillName': 'Databases',
        'skillImg': 'src/assets/img/javascript.png'
      },
    ]
  }
}

