//@flow

class config {
  token : string = '';
  apiRoot : string = '';
  throwErrors : bool = true;
  globalErrorHandler = (e : Error) => {
    console.error(e);
  };

  getAuthorizationHeader() : string {
    return `Bearer ${this.token}`;
  }
};

const Configuration = new config();

export default Configuration;
