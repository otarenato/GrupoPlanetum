import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Inspection } from 'src/app/models/inspection.model';
import { PlanetumService } from 'src/app/services/planetum.service';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.css']
})
export class InspectionsComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'productCode'];
  dataSource: Inspection[] = [];

  constructor(private _service: PlanetumService) {



  }

  ngOnInit(): void {
    this.loadGrid();
  }

  loadGrid(): void {
    this.dataSource = <Inspection[]>JSON.parse(sessionStorage.getItem("BDInspection") || "[]");
  }

}
