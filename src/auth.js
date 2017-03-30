// @flow
import Fetchable from './fetchable';
import Constants from './constants';

let singleton: any = null;

export default class Auth extends Fetchable {
  constructor() {
    super();

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  register(username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string): Promise < Object > {
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

  login(username: string, password: string): Promise < Object > {
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

  logout(): Promise < Object > {
    return super.delete('/auth/credentials');
  }

  setUser(response: Object): Object {
    const isAuthenticated = !!response.sessionId;
    const user: {
      isAuthenticated: boolean,
      userName: string,
      sessionId: number,
      userId: number
    } = {
      isAuthenticated: false,
      userName: '',
      sessionId: 0,
      userId: 0
    };

    if (isAuthenticated) {
      user.userName = response.userName;
      user.sessionId = response.sessionId;
      user.userId = response.userId;
    }
    return user;
  }

  profile(): Promise < Object > {
    return super.get('/api/v1/me')
      .then(json => json.result);
  }

  forgotPassword(email: string): Promise < Object > {
    return super.post('/api/v1/password/forgot', {
        body: this.toForm({
          email
        })
      })
      .then((json) => {
        return json;
      });
  }

  resetPassword(
    email: string,
    token: string,
    password: string,
    passwordRepeat: string): Promise < Object > {
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
