import { Component, OnInit } from '@angular/core';
import { PlanetumService } from 'src/app/services/planetum.service';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.css']
})
export class InspectionsComponent implements OnInit {

  constructor(private _service: PlanetumService) { }

  ngOnInit(): void {
    this._service.loadSessionStorage();
  }

}
