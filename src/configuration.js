class config {
  token = '';
  apiRoot = '';
  throwErrors = true;
  fetch = {
    mode: 'no-cors',
    credentials: 'omit',
  };

  globalErrorHandler = (e, statusCode, message) => {
    console.error(e, statusCode, message);
    if (this.throwErrors) {
      throw e;
    }
  };

  getAuthorizationHeader() {
    return `Bearer ${this.token}`;
  }
};

const Configuration = new config();

export default Configuration;
