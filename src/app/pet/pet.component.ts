import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet: Pet = {
    name : 'Puppie',
    image: 'https://live-production.wcms.abc-cdn.net.au/ff1221fbfdb2fe163fdda15df5f77676?impolicy=wcms_crop_resize&cropH=467&cropW=700&xPos=0&yPos=0&width=862&height=575'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
