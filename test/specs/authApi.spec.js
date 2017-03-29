import AuthApi from '../../src/auth';


describe('AuthApi', () => {
  it('should be a singleton', () => {
    const a = new AuthApi();
    const b = new AuthApi();
    expect(a).to.eql(b);
  });

  describe('#register(5)', () => {
    it('should throw when missing username', () => {
      // const api = new AuthApi();
      // const fetch = sinon.stub(api, 'post');
      //
      // expect(api.register()).to.throw();
      //
      // fetch.restore();
    });
  });
});
