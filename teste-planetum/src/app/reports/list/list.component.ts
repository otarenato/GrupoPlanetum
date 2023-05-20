import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { PlanetumService } from 'src/app/services/planetum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource: Report[] = [];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.loadGrid();
  }

  loadGrid(): void {
    this.dataSource = <Report[]>JSON.parse(sessionStorage.getItem("BDReport") || "[]");
  }

  EditRow(id: number | undefined) {
    if (id != undefined) {
      this.router.navigate(['/reports/edit'], { queryParams: { id: id }});
    }
  }

  CreateRow(): void {
    this.router.navigate(['/reports/create']);
  }

}
