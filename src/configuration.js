//@flow

class config {
  token: string = '';
  apiRoot: string = '';
  throwErrors: bool = true;
  globalErrorHandler = (e: Error, statusCode: number, message: string) => {
    console.error(e, statusCode, message);
    if (this.throwErrors) {
      throw e;
    }
  };

  getAuthorizationHeader(): string {
    return `Bearer ${this.token}`;
  }
};

const Configuration = new config();

export default Configuration;
