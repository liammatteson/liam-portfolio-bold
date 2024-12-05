import { put } from '@vercel/blob';
import { nanoid } from 'nanoid';
import type { UploadResponse, FileValidationOptions } from './types/upload';
import { validateFile } from './utils/validation';
import { UPLOAD_ERRORS } from './constants/upload';

export async function uploadToBlob(
  file: File,
  options: FileValidationOptions = {}
): Promise<UploadResponse> {
  try {
    const validation = validateFile(file, options);
    
    if (!validation.isValid) {
      return {
        url: '',
        success: false,
        error: validation.error
      };
    }

    const filename = `${nanoid()}-${file.name}`;

    const blob = await put(filename, file, {
      access: 'public',
      addRandomSuffix: false,
      contentType: file.type,
    });

    return {
      url: blob.url,
      success: true
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      url: '',
      success: false,
      error: error instanceof Error ? error.message : UPLOAD_ERRORS.UPLOAD_FAILED
    };
  }
}