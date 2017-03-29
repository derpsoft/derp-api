import WarehouseApi from '../../src/warehouse';

describe('Warehouse API', () => {
  let warehouseApi;

  beforeEach(() => {
    warehouseApi = new WarehouseApi();
  });

  it('should create only a single instance', () => {
    const duplicateWarehouseApi = new WarehouseApi();

    expect(warehouseApi).to.be.an.instanceof(WarehouseApi);
    expect(duplicateWarehouseApi).to.be.an.instanceof(WarehouseApi);
    expect(warehouseApi).to.deep.equal(duplicateWarehouseApi);
  });

  it('should have the base CRUD commands', () => {
    expect(warehouseApi.count).to.be.an('function');
    expect(warehouseApi.list).to.be.an('function');
    expect(warehouseApi.single).to.be.an('function');
    expect(warehouseApi.typeahead).to.be.an('function');
    expect(warehouseApi.save).to.be.an('function');
    expect(warehouseApi.create).to.be.an('function');
    expect(warehouseApi.delete).to.be.an('function');
  });
});
