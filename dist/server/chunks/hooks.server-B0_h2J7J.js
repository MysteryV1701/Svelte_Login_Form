import { C as CookiesManager, A as AuthService } from './auth-service-DXtUsBmB.js';
import './db-DVrCvq5H.js';
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

const handle = async ({ event, resolve }) => {
  const cookiesManager = new CookiesManager(event.cookies);
  const session_id = cookiesManager.session_id;
  if (!session_id)
    return await resolve(event);
  const auth_token = await AuthService.findAuthToken(session_id);
  if (!auth_token)
    return await resolve(event);
  await AuthService.accessValid(auth_token.id, event.cookies);
  if (!event.locals.user)
    cookiesManager.deleteSessionId();
  event.locals.user = {
    email: auth_token.user.email,
    role: auth_token.user.role,
    name: auth_token.user.name,
    phone: auth_token.user.phone
  };
  return await resolve(event);
};

export { handle };
//# sourceMappingURL=hooks.server-B0_h2J7J.js.map
