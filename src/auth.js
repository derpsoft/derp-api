import Fetchable from './fetchable';
import Constants from './constants';

export default class Auth extends Fetchable {
  constructor() {
    super();

    if (Auth.prototype.singleton) {
      return Auth.prototype.singleton;
    }
    Auth.prototype.singleton = this;

    return this;
  }

  register(username, password, email, firstName, lastName) {
    return super.post('/register', {
      body: this.toForm({
        username,
        password,
        email,
        firstName,
        lastName
      })
    })
    .then((json) => {
      return this.setUser(json);
    });
  }

  login(username, password) {
    return super.post('/auth/credentials', {
      body: this.toForm({
        username,
        password
      })
    })
    .then((json) => {
      return this.setUser(json);
    });
  }

  logout() {
    return super.delete('/auth/credentials');
  }

  setUser(response) {
    const isAuthenticated = !!response.sessionId;
    const user = {
      isAuthenticated
    };

    if (isAuthenticated) {
      user.userName = response.userName;
      user.sessionId = response.sessionId;
      user.userId = response.userId;
    }
    return user;
  }

  profile() {
    return super.get('/api/v1/me')
      .then(json => json.result);
  }

  forgotPassword(email) {
    return super.post('/api/v1/password/forgot', {
      body: this.toForm({
        email
      })
    })
    .then((json) => {
      return json;
    });
  }

  resetPassword(email, token, password, passwordRepeat) {
    return super.post('/api/v1/password/reset', {
      body: this.toForm({
        email,
        token,
        password,
        passwordRepeat
      })
    });
  }
}
