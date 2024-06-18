import { D as Database, d as db } from './db-DVrCvq5H.js';

class CookiesManager {
  constructor(_cookies) {
    this._cookies = _cookies;
  }
  static _session_id_key = "session_id";
  get session_id() {
    return this._cookies.get(CookiesManager._session_id_key) ?? "";
  }
  setSessionId(session_id, max_age_sec) {
    this._cookies.set(CookiesManager._session_id_key, session_id, {
      path: "/",
      maxAge: max_age_sec,
      sameSite: "lax",
      secure: true,
      httpOnly: true
    });
  }
  deleteSessionId() {
    this._cookies.delete(CookiesManager._session_id_key, { path: "/" });
  }
}
class AuthService {
  static async getSessionLifetimeSec() {
    return await Database.getAppSettingInt("session_lifetime_sec");
  }
  static getLimit(lifetime_sec) {
    const limit = /* @__PURE__ */ new Date();
    if (lifetime_sec == 0)
      console.warn("lifetime_sec is 0");
    limit.setSeconds(limit.getSeconds() - lifetime_sec);
    return limit;
  }
  static async createAuthToken(user_id, session_lifetime_sec) {
    const session_limit = AuthService.getLimit(session_lifetime_sec);
    const [auth_token] = await db.$transaction([
      db.authToken.create({
        data: { user_id, token: crypto.randomUUID() }
      }),
      db.authToken.deleteMany({ where: { updated_at: { lt: session_limit } } })
    ]);
    return auth_token;
  }
  static async findAuthToken(session_id) {
    const session_lifetime_sec = await AuthService.getSessionLifetimeSec();
    const session_limit = AuthService.getLimit(session_lifetime_sec);
    const auth_token = await db.authToken.findFirst({
      where: { updated_at: { gte: session_limit } },
      include: { user: { include: { role: true } } }
    });
    return auth_token;
  }
  static async updateAuthToken(auth_token_id) {
    const auth_token = await db.authToken.update({
      where: { id: auth_token_id },
      data: { updated_at: /* @__PURE__ */ new Date() }
    });
    return auth_token;
  }
  static async accessValid(auth_token_id, cookies) {
    const auth_token = await AuthService.updateAuthToken(auth_token_id);
    const session_lifetime_sec = await AuthService.getSessionLifetimeSec();
    new CookiesManager(cookies).setSessionId(auth_token.token, session_lifetime_sec);
  }
  static async logIn(user_id, cookies) {
    const session_lifetime_sec = await AuthService.getSessionLifetimeSec();
    const auth_token = await AuthService.createAuthToken(user_id, session_lifetime_sec);
    new CookiesManager(cookies).setSessionId(auth_token.token, session_lifetime_sec);
  }
  static async logOut(cookies) {
    const cookiesManager = new CookiesManager(cookies);
    await db.authToken.delete({ where: { token: cookiesManager.session_id } }).then(() => {
      cookiesManager.deleteSessionId();
    });
  }
}

export { AuthService as A, CookiesManager as C };
//# sourceMappingURL=auth-service-DXtUsBmB.js.map
