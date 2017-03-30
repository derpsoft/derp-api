import CategoryApi from '../../src/category';

describe('CategoryApi', () => {
  let categoryApi;

  beforeEach(() => {
    categoryApi = new CategoryApi();
  });

  it('should create only a single instance', () => {
    const duplicateCategoryApi = new CategoryApi();

    expect(categoryApi).to.be.an.instanceof(CategoryApi);
    expect(duplicateCategoryApi).to.be.an.instanceof(CategoryApi);
    expect(categoryApi).to.deep.equal(duplicateCategoryApi);
  });

  it('should have the base CRUD commands', () => {
    expect(categoryApi.count).to.be.an('function');
    expect(categoryApi.list).to.be.an('function');
    expect(categoryApi.single).to.be.an('function');
    expect(categoryApi.typeahead).to.be.an('function');
    expect(categoryApi.save).to.be.an('function');
    expect(categoryApi.create).to.be.an('function');
    expect(categoryApi.delete).to.be.an('function');
  });
});
