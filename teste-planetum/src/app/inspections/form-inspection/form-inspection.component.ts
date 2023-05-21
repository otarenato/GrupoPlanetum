import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inspection } from 'src/app/models/inspection.model';
import { Report } from 'src/app/models/report.model';
import { PlanetumService } from 'src/app/services/planetum.service';

@Component({
  selector: 'app-form-inspection',
  templateUrl: './form-inspection.component.html',
  styleUrls: ['./form-inspection.component.css']
})
export class FormInspectionComponent implements OnInit {

  isCreate: boolean = false;
  dataSource: Report[] = [];
  path: string = '';
  _id: any;
  list: Inspection[] = new Array<Inspection>();
  listReport: Report[] = new Array<Report>();
  item: Inspection = new Inspection();

  constructor(private formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute, private router: Router, private _planetumService: PlanetumService) { }

  form = this.formBuilder.group({
    companyId: [''],
    brokerCode: [''],
    prductCode: [''],
    productName: ['']
  });

  ngOnInit(): void {
    this.isCreate = this.path === 'reports/create';
    this.list = JSON.parse(sessionStorage.getItem('BDInspection') || '[]');
    if (!this.isCreate) {
      this._activatedRoute.queryParams.subscribe(param => {
        this._id = param["id"];
        this.item = this._planetumService.getInspectionById(this._id);
        this.form.controls["companyId"].setValue(this.item.companyId);
        this.form.controls["brokerCode"].setValue(this.item.brokerCode);
        this.form.controls["prductCode"].setValue(this.item.productCode);
        this.form.controls["productName"].setValue(this.item.productName);
        this.item.reports?.forEach(x => {
          this.listReport.push(x);
        })
      });
    }
  }

  UpdateItem(): void {
    this.list.forEach(x => {
      if(x.Id == <number>this._id) {
        x.companyId = this.form.controls["companyId"].value;
        x.brokerCode = this.form.controls["brokerCode"].value;
        x.productCode = this.form.controls["prductCode"].value;
        x.productName = this.form.controls["productName"].value;
      }
      sessionStorage.setItem('BDInspection', JSON.stringify(this.list));
      this.router.navigate(["/inspections/list"]);
    })
  }

}
