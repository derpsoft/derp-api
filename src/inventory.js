// @flow
import Fetchable from './fetchable';

export default class Inventory extends Fetchable {
  constructor() {
    super();
  }

  create({
    locationId,
    productId,
    quantity,
  } : Object) : Promise<Object> {
    if (quantity === 0) {
      throw new Error('quantity must be != 0');
    }
    const headers = {
      'Content-Type': 'application/json',
    };

    const xact = {
      locationId,
      productId,
      quantity
    };
    return super
      .post('/api/v1/inventory-transactions', {
        body: this.toJson(xact),
        headers,
      });
  }


  getLogs(skip : number = 0, take : number = 25) : Promise<Object> {
    return super.get(`/api/v1/inventory-transactions?skip=${skip}&take=${take}`)
      .then(json => json.result);
  }

  countLogs() : Promise<Object> {
    return super.get('/api/v1/inventory-transactions/count')
      .then(json => json.result || json.count);
  }

  searchLogs(query : string, skip : number = 0, take : number = 25) : Promise<Object> {
    const body = new URLSearchParams();
    body.set('skip', skip.toString());
    body.set('take', take.toString());
    body.set('query', query);

    return super.get(`/api/v1/inventory-transactions/search?${body.toString()}`);
  }
}
