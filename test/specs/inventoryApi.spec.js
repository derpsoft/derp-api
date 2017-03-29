import InventoryApi from '../../src/inventory';

describe('Inventory API', () => {
  let inventoryApi;

  beforeEach(() => {
    inventoryApi = new InventoryApi();
  });

  afterEach(() => {
  });

  it('should create only a single instance', () => {
    const duplicateInventoryApi = new InventoryApi();

    expect(inventoryApi).to.be.an.instanceof(InventoryApi);
    expect(duplicateInventoryApi).to.be.an.instanceof(InventoryApi);
    expect(inventoryApi).to.deep.equal(duplicateInventoryApi);
  });

  describe('Manage Inventory', () => {
    let spy;

    beforeEach(() => {
      spy = sinon.spy(inventoryApi, 'create');
    });

    afterEach(() => {
      spy.restore();
    });

    it('should create transaction', () => {
      const xact = {
        quantity: 1,
      };
      const promise = inventoryApi.create(xact);
      expect(promise).to.be.an('Promise');
    });

    it('should throw an error when quantity is equal to 0', () => {
      const errorMessage = 'quantity must be != 0';
      const xact = {
        quantity: 0,
      };

      spy.withArgs(xact);

      expect(() => {
        inventoryApi.create(xact);
      }).to.throw(errorMessage);

      sinon.assert.threw(spy.withArgs(xact));
    });
  });

  describe('Get Logs', () => {
    it('should get logs', () => {
      const skip = 0;
      const take = 25;
      const spy = sinon.spy(inventoryApi, 'getLogs');
      spy.withArgs(skip, take);

      inventoryApi.getLogs(skip, take);

      sinon.assert.calledOnce(spy);
      spy.calledWith(skip, take);
    });
  });

  describe('Count Logs', () => {
    it('should get transaction counts', () => {
      const promise = inventoryApi.countLogs();

      expect(promise).to.be.an('Promise');
    });
  });

  describe('Search Logs', () => {
    it('should search logs', () => {
      const skip = 0;
      const take = 25;
      const promise = inventoryApi.searchLogs(skip, take);

      expect(promise).to.be.an('Promise');
    });
  });
});
