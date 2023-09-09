import { NextResponse } from 'next/server';
import axios from 'axios';
import { getNRandomData } from '@/app/utils';

const expressUrl = 'http://127.0.0.1:3000';

export async function GET(request) {
  const res = await axios.get(`${expressUrl}/item`);
  const {
    data: { data: result },
  } = res;
  let finalResult = result;
  const q = request.nextUrl.searchParams.get('q');
  if (q !== 'undefined') {
    finalResult = getNRandomData(result, parseInt(q, 10));
  }

  return NextResponse.json({ data: finalResult });
}
