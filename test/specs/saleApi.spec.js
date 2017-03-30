import SaleApi from '../../src/sale';

describe('saleApi', () => {
  let saleApi;

  beforeEach(() => {
    saleApi = new SaleApi();
  });

  it('should create only a single instance', () => {
    const duplicateSaleApi = new SaleApi();

    expect(saleApi).to.be.an.instanceof(SaleApi);
    expect(duplicateSaleApi).to.be.an.instanceof(SaleApi);
    expect(saleApi).to.deep.equal(duplicateSaleApi);
  });

  it('should have the base CRUD commands', () => {
    expect(saleApi.count).to.be.an('function');
    expect(saleApi.list).to.be.an('function');
    expect(saleApi.single).to.be.an('function');
    expect(saleApi.typeahead).to.be.an('function');
    expect(saleApi.save).to.be.an('function');
    expect(saleApi.create).to.be.an('function');
    expect(saleApi.delete).to.be.an('function');
  });
});
