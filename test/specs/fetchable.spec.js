import fetchMock from 'fetch-mock';
import Fetchable from '../../src/fetchable';
import FetchError from '../../src/errors';

describe('Fetchable', () => {

  it('throws if baseUrl is empty', () => {
    expect(() => new Fetchable('')).to.throw();
  });

  it('rejects on authentication failed', () => {
    const host = 'http://0.0.0.0';
    const fetch = fetchMock.sandbox().mock(`begin:${host}`, 401);
    const fetchable = new Fetchable(host, fetch);

    return expect(fetchable.get('/')).to.eventually.be.rejectedWith(FetchError);
  });

  describe('#get()', () => {
    it('should exist', () => {
      const fetchable = new Fetchable('http://0.0.0.0', () => {});

      expect(fetchable.get).to.be.a('function');
    });

    it('throws on empty path', () => {
      const fetchable = new Fetchable('http://0.0.0.0', () => {});

      expect(() => fetchable.get()).to.throw();
      expect(() => fetchable.get('')).to.throw();
    });

    it('should handle requests', () => {
      const host = 'http://0.0.0.0';
      const fetch = fetchMock.sandbox().mock(`begin:${host}`, 200);
      const dispatch = sinon.spy();
      const fetchable = new Fetchable(host, fetch);

      return expect(fetchable.get('/')).to.be.fulfilled;
    });
  });

  describe('#post()', () => {
    it('should exist', () => {
      const fetchable = new Fetchable('http://0.0.0.0', () => {});

      expect(fetchable.post).to.be.a('function');
    });

    it('should handle requests', () => {
      const host = 'http://0.0.0.0';
      const fetch = fetchMock.sandbox().mock(`begin:${host}`, 200);
      const dispatch = sinon.spy();
      const fetchable = new Fetchable(host, fetch);

      return expect(fetchable.post('/')).to.be.fulfilled;
    });
  });
});
