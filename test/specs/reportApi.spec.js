import ReportApi from '../../src/report';

describe('Report API', () => {
  let reportApi;

  beforeEach(() => {
    reportApi = new ReportApi();
  });

  afterEach(() => {
    reportApi = null;
  });

  it('should create only a single instance', () => {
    const duplicateReportApi = new ReportApi();

    expect(reportApi).to.be.an.instanceof(ReportApi);
    expect(duplicateReportApi).to.be.an.instanceof(ReportApi);
    expect(reportApi).to.deep.equal(duplicateReportApi);
  });

  describe('Dashboard Report', () => {
    it('should return general report', () => {
      const promise = reportApi.dashboard();
      expect(promise).to.be.an('Promise');
    });
  });

  describe('Sales by Product', () => {
    it('should return a promise of the report', () => {
      const promise = reportApi.salesByProduct();
      expect(promise).to.be.an('Promise');
    });
  });

  describe('Sales by Total', () => {
    it('should return a promise of the report', () => {
      const promise = reportApi.salesByTotal();
      expect(promise).to.be.an('Promise');
    });
  });

  describe('Sales by Vendor', () => {
    it('should return a promise of the report', () => {
      const promise = reportApi.salesByVendor();
      expect(promise).to.be.an('Promise');
    });
  });
});
