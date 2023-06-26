/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest } from 'next/server';

async function getAuthSession(ctx: NextRequest) {
  return ctx.cookies.get('authToken');
}

export { getAuthSession };
