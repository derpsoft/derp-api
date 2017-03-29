import VendorApi from '../../src/vendor';

describe('Vendor API', () => {
  let vendorApi;

  beforeEach(() => {
    vendorApi = new VendorApi();
  });

  it('should create only a single instance', () => {
    const duplicateVendorApi = new VendorApi();

    expect(vendorApi).to.be.an.instanceof(VendorApi);
    expect(duplicateVendorApi).to.be.an.instanceof(VendorApi);
    expect(vendorApi).to.deep.equal(duplicateVendorApi);
  });

  it('should have the base CRUD commands', () => {
    expect(vendorApi.count).to.be.an('function');
    expect(vendorApi.list).to.be.an('function');
    expect(vendorApi.single).to.be.an('function');
    expect(vendorApi.typeahead).to.be.an('function');
    expect(vendorApi.save).to.be.an('function');
    expect(vendorApi.create).to.be.an('function');
    expect(vendorApi.delete).to.be.an('function');
  });
});
