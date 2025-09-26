import { NextRequest, NextResponse } from 'next/server';
import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

const handler = makeRouteHandler({ config });

function checkAccess(request: NextRequest) {
  const host = request.headers.get('host') || '';

  const isAllowed = host.includes('preview.tootie.space') ||
                   host.includes('localhost') ||
                   host.includes('127.0.0.1');

  return isAllowed;
}

export async function GET(request: NextRequest, context: any) {
  if (!checkAccess(request)) {
    return new NextResponse(null, { status: 404 });
  }
  return handler.GET(request, context);
}

export async function POST(request: NextRequest, context: any) {
  if (!checkAccess(request)) {
    return new NextResponse(null, { status: 404 });
  }
  return handler.POST(request, context);
}