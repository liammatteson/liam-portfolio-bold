import type { UploadResponse, FileValidationOptions } from './types/upload';
import { validateFile } from './utils/validation';
import { UPLOAD_ERRORS } from './constants/upload';

export async function uploadToBlob(
  file: File,
  options: FileValidationOptions = {}
): Promise<UploadResponse> {
  // Temporary mock response until blob storage is configured
  return {
    url: '',
    success: false,
    error: 'Blob storage not configured yet'
  };
}