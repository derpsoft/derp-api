class config {
  token = '';
  apiRoot = '';

  constructor() {}

  getAuthorizationHeader() {
    return `Bearer ${this.token}`;
  }
};

const Configuration = new config();

export default Configuration;
