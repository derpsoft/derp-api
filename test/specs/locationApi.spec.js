import LocationApi from '../../src/location';

describe('Location API', () => {
  let locationApi;

  beforeEach(() => {
    locationApi = new LocationApi();
  });

  it('should create only a single instance', () => {
    const duplicateLocationApi = new LocationApi();

    expect(locationApi).to.be.an.instanceof(LocationApi);
    expect(duplicateLocationApi).to.be.an.instanceof(LocationApi);
    expect(locationApi).to.deep.equal(duplicateLocationApi);
  });

  it('should have the base CRUD commands', () => {
    expect(locationApi.count).to.be.an('function');
    expect(locationApi.list).to.be.an('function');
    expect(locationApi.single).to.be.an('function');
    expect(locationApi.typeahead).to.be.an('function');
    expect(locationApi.save).to.be.an('function');
    expect(locationApi.create).to.be.an('function');
    expect(locationApi.delete).to.be.an('function');
  });
});
