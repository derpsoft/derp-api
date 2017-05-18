// @flow
import Fetchable from './fetchable';

let singleton : any = null;

export default class Report extends Fetchable {
  constructor() {
    super();

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  dashboard() : Promise<Object> {
    const body : any = new URLSearchParams();

    return super.get(`/api/v1/reports/dashboard?${body}`)
      .then(json => json.result);
  }

  salesByProduct(groupBy : string, productId : number) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('groupBy', groupBy);
    body.set('productId', productId);

    return super.get(`/api/v1/reports/salesByProduct?${body}`)
      .then(json => json.report);
  }

  salesByTotal(groupBy : string) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('groupBy', groupBy);

    return super.get(`/api/v1/reports/salesByTotal?${body}`)
      .then(json => json.report);
  }

  salesByUser(userId : string) : Promise<Object> {
    return super.get(`/api/v1/reports/scalar/salesByUser?userId=${userId}`)
      .then(json => json.report);
  }

  revenueByUser(userId : string) : Promise<Object> {
    return super.get(`/api/v1/reports/scalar/revenueByUser?userId=${userId}`)
      .then(json => json.result);
  }

  listingsByUser(userId : string) : Promise<Object> {
    return super.get(`/api/v1/reports/scalar/listingsByUser?userId=${userId}`)
      .then(json => json.result);
  }

  salesByVendor(groupBy : string, vendorId : number) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('groupBy', groupBy);
    body.set('vendorId', vendorId);

    return super.get(`/api/v1/reports/salesByVendor?${body}`)
      .then(json => json.result);
  }

  inventoryShippedByUser(userId : string) : Promise<number> {
    return super.get(`/api/v1/reports/scalar/shippedByUser?userId=${userId}`)
      .then(json => json.result);
  }

  inventoryReceivedByUser(userId : string) : Promise<number> {
    return super.get(`/api/v1/reports/scalar/receivedByUser?userId=${userId}`)
      .then(json => json.result);
  }
}
