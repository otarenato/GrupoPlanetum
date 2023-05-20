import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/models/report.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  path: string = '';
  isCreate: boolean = false;
  _id: any;
  list: Report[] = new Array<Report>();
  item: Report = new Report();
  form = this.formBuilder.group({
    status: [''],
    observation: ['']
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this._activatedRoute.snapshot.url.join('/');
    this.isCreate = this.path === 'reports/create';
    if (!this.isCreate) {
      this._activatedRoute.queryParams.subscribe(param => {
        this._id = param["id"];
        this.list = <Report[]>JSON.parse(sessionStorage.getItem('BDReport') || "[]");
        this.item = <Report>this.list.find(x => x.Id == this._id);
        this.form.controls["status"].setValue(this.item.status);
        this.form.controls["observation"].setValue(this.item.observation);

      });
    }
  }

  UpdateItem(): void {
    this.list.forEach(x => {
      if(x.Id == <number>this._id) {
        x.status = this.form.controls["status"].value;
        x.observation = this.form.controls["observation"].value;
      }
      sessionStorage.setItem('BDReport', JSON.stringify(this.list));
      this.router.navigate(["/reports/list"]);
    })
  }


  CreateItem(): void {
    this.list = <Report[]>JSON.parse(sessionStorage.getItem('BDReport') || "[]");
    this.item = this.list[this.list.length -1];
    let newItem = new Report();
    newItem.Id = this.item.Id ? this.item.Id + 1 : 0;
    newItem.status = this.form.controls["status"].value;
    newItem.observation = this.form.controls["observation"].value;
    this.list.push(newItem);
    sessionStorage.setItem('BDReport', JSON.stringify(this.list));
    this.router.navigate(["/reports/list"]);
  }

}
