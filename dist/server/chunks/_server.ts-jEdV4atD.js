import { e as error, j as json } from './index-DzcLzHBX.js';
import { D as Database, b as bcrypt } from './db-DVrCvq5H.js';
import { A as AuthService } from './auth-service-DXtUsBmB.js';
import '@prisma/client';
import 'url';
import 'fs';
import 'path';
import 'mock-aws-s3';
import 'os';
import 'aws-sdk';
import 'nock';
import 'stream';
import 'util';
import 'events';
import 'buffer';
import 'assert';
import 'child_process';
import 'crypto';

const POST = async (event) => {
  const { cookies } = event;
  const { slug } = event.params;
  try {
    switch (slug) {
      case "logout":
        await AuthService.logOut(cookies).then((res) => {
        }).catch((e) => {
          return json({ message: "Logout Not Successful" });
        });
      case "login":
        const body_login = await event.request.json();
        if (!body_login.email || !body_login.password) {
          error(400, "Please provide an email address and password to authenticate");
        }
        const userLogin = await Database.findUser(body_login.email);
        if (userLogin?.email === body_login.email && await bcrypt.compare(body_login.password, userLogin.password)) {
          event.locals.user = userLogin;
          await AuthService.logIn(userLogin.id, cookies);
          return json({ message: "Login Successful", user: userLogin });
        } else {
          error(401, "Invalid	email/password combination");
        }
      case "register":
        const body = await event.request.json();
        if (!body.email || !body.name || !body.password) {
          error(400, "Please supply all required: email, password, name");
        }
        const user = await Database.findUser(body.email);
        if (user) {
          error(404, "Email has exist");
        } else {
          await Database.registerNewUser(body);
          break;
        }
      default:
        error(404, "Invalid Endpoint");
    }
  } catch (err) {
    error(503, "Could not communicate with database");
  }
  return json({ message: "" });
};

export { POST };
//# sourceMappingURL=_server.ts-jEdV4atD.js.map
