import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetumService {

  constructor() { }

  private reportObj = [
    {
      "Id": 1,
      "Status": "A",
      "Observation": "xpto"
    },
    {
      "Id": 2,
      "Status": "B",
      "Observation": "xpto2"
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
    }
  ];

  loadSessionStorage(): void {
    let _bdInspection = JSON.stringify(this.inspectionObj);
    let _bdReport = JSON.stringify(this.reportObj);
    sessionStorage.setItem("BDInspection", _bdInspection);
    sessionStorage.setItem("BDReport", _bdReport);
  }
}
