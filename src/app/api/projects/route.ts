import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { verifyJwt } from '@/lib/jwt';
import Project from '@/models/Project';

export async function GET(req: NextRequest) {
  await dbConnect();
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = auth.split(' ')[1];
  const payload = verifyJwt(token);
  if (!payload) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
  const projects = await Project.find({ owner: (payload as any).id });
  return NextResponse.json({ projects });
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = auth.split(' ')[1];
  const payload = verifyJwt(token);
  if (!payload) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
  const { name, description } = await req.json();
  if (!name) {
    return NextResponse.json({ error: 'Project name required' }, { status: 400 });
  }
  const project = await Project.create({ name, description, owner: (payload as any).id });
  return NextResponse.json({ project });
}
