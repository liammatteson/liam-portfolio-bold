import { NextResponse } from 'next/server';
import { uploadToBlob } from '@/lib/blob';
import { UPLOAD_CONSTRAINTS, UPLOAD_ERRORS } from '@/lib/constants/upload';

export const runtime = 'edge';

export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { success: false, error: UPLOAD_ERRORS.BLOB_NOT_CONFIGURED },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: UPLOAD_ERRORS.NO_FILE_PROVIDED },
        { status: 400 }
      );
    }

    const result = await uploadToBlob(file, {
      maxSizeInBytes: UPLOAD_CONSTRAINTS.MAX_FILE_SIZE,
      allowedTypes: UPLOAD_CONSTRAINTS.ALLOWED_TYPES
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: UPLOAD_ERRORS.UPLOAD_FAILED },
      { status: 500 }
    );
  }
}