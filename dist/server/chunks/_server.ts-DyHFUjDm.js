import { d as db } from './db-DVrCvq5H.js';
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

const GET = async () => {
  try {
    await db.role.create({ data: { name: "admin" } });
    await db.role.create({ data: { name: "manager" } });
    await db.role.create({ data: { name: "customer" } });
    await db.appSetting.create({ data: { key: "session_lifetime_sec", value: "600" } });
    return new Response("Success");
  } catch (err) {
    return new Response("Error");
  }
};

export { GET };
//# sourceMappingURL=_server.ts-DyHFUjDm.js.map
