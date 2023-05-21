import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {



  }

  ngOnInit(): void {
    this.loadGrid();
  }

  loadGrid(): void {
    this.dataSource = <Inspection[]>JSON.parse(sessionStorage.getItem("BDInspection") || "[]");
  }

  CreateRow(): void {
    this.router.navigate(['/inspections/create']);
  }

  EditRow(id: number | undefined) {
    if (id != undefined) {
      this.router.navigate(['/inspections/edit'], { queryParams: { id: id }});
    }
  }

}
