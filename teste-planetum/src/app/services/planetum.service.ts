import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspection } from '../models/inspection.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetumService {

  constructor(private http: HttpClient) { }

  returnList: Inspection[] = [];

  private reportObj = [
    {
      "Id": 1,
      "companyId": "001",
      "status": "A",
      "observation": "xpto"
    },
    {
      "Id": 2,
      "companyId": "001",
      "status": "B",
      "observation": "xpto2"
    },
    {
      "Id": 3,
      "companyId": "100",
      "status": "X",
      "observation": "Lorem ipsum..."
    },
    {
      "Id": 4,
      "companyId": "100",
      "status": "Y",
      "observation": "Lorem Ipsum 2"
    }
  ];

  private inspectionObj = [
    {
      "Id": 1,
      "companyId": "001",
      "brokerCode": "123456",
      "productCode": "12345678",
      "productName": "Teste",
      "InspectionNumber": "123",
      "reports": this.reportObj
    },
    {
      "Id": 2,
      "companyId": "100",
      "brokerCode": "654321",
      "productCode": "87654321",
      "productName": "XPTO",
      "InspectionNumber": "321",
      "reports": []
    }
  ];

  loadSessionStorage(): void {
    let _bdInspection = JSON.stringify(this.inspectionObj);
    let _bdReport = JSON.stringify(this.reportObj);
    sessionStorage.setItem("BDInspection", _bdInspection);
    sessionStorage.setItem("BDReport", _bdReport);
  }

  getListInspaction(): Inspection[] {
    const listInspection = JSON.parse(sessionStorage.getItem('BDInspection') || '[]');
    for (let item of listInspection) {
      let _inspection = new Inspection();
      Object.assign(_inspection, item);
      this.returnList.push(_inspection);
    }
    return this.returnList;
  }

  get(): Observable<Inspection[]> {
    const listInspection = sessionStorage.getItem('BDInspection') || '[]';
    return this.http.get(listInspection).pipe(map((response: any) => response.json()));
  }

  getInspectionById(id: number): Inspection {
    const listInspection = <Inspection[]>JSON.parse(sessionStorage.getItem('BDInspection') || "[]");
    const listReport = <Report[]>JSON.parse(sessionStorage.getItem('BDReport') || "[]");
    let itemInspection = <Inspection>listInspection.find(x => x.Id == id);
    let filteredReports = <Report[]>listReport.filter(r => r.companyId === itemInspection.companyId);
    itemInspection.reports = filteredReports;
    return itemInspection;
  }
}
