import CrudApi from '../../src/base';

describe('Crud API', () => {
  let crudApi;

  afterEach(() => {
    crudApi = null;
  });

  it('should initial helper api', () => {
    const name = 'product';
    const routes = {};
    crudApi = new CrudApi(name, routes);

    expect(crudApi.routes).to.be.defined;
    expect(crudApi.name).to.equal(name);
    expect(crudApi.one).to.be.defined;
    expect(crudApi.many).to.be.defined;
  });
});
