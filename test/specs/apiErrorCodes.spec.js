import getErrorCodeHandler from '../../src/errorCodes';
import Constants from '../../src/constants';
import {
  expect
} from 'chai';

describe('apiErrorCodes', () => {
  it('should not throw on 200 responses', () => {
    const response = {
      ok: true,
      status: 200,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.not.throw();
  });

  it('should not throw on 204 responses', () => {
    const response = {
      ok: true,
      status: 204,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.not.throw();
  });

  it('should throw redirect errors', () => {
    const response = {
      ok: true,
      status: 302,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.throw();
  });

  it('should throw validation errors', () => {
    const response = {
      ok: true,
      status: 400,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.throw();
  });

  it('should throw authorization errors', () => {
    const response = {
      ok: true,
      status: 401,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.throw();
  });

  it('should throw permission errors', () => {
    const response = {
      ok: true,
      status: 403,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.throw();
  });

  it('should throw implementation errors', () => {
    const response = {
      ok: false,
      status: 405,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.throw();
  });

  it('should throw server errors', () => {
    const response = {
      ok: false,
      status: 500,
    };

    expect(getErrorCodeHandler({
      response,
    })).to.throw();
  });
});
