import { Report } from "./report.model";

export class Inspection {
  constructor(
    public Id: number,
    public companyId: string,
    public brokerCode: string,
    public productCode: string,
    public productName: string,
    public InspectionNumber: number,
    public reports: Report[]
  ) {}
}
