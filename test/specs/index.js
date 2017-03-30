import Configuration from '../../src/configuration';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';

chai.use(chaiAsPromised);

global.expect = chai.expect;
global.sinon = sinon;
global.URLSearchParams = class { set() {} };
global.fetch = fetchMock;

before(() => {
  Configuration.apiRoot = 'http://localhost';
});
