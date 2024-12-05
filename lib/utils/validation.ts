import type { FileValidationOptions } from '../types/upload';
import { UPLOAD_ERRORS } from '../constants/upload';

export function validateFile(file: File, options: FileValidationOptions): { isValid: boolean; error?: string } {
  const { maxSizeInBytes, allowedTypes } = options;

  if (maxSizeInBytes && file.size > maxSizeInBytes) {
    return {
      isValid: false,
      error: UPLOAD_ERRORS.FILE_TOO_LARGE(maxSizeInBytes)
    };
  }

  if (allowedTypes && !allowedTypes.some(type => {
    if (type.endsWith('/*')) {
      const baseType = type.split('/')[0];
      return file.type.startsWith(`${baseType}/`);
    }
    return file.type === type;
  })) {
    return {
      isValid: false,
      error: UPLOAD_ERRORS.INVALID_TYPE(allowedTypes)
    };
  }

  return { isValid: true };
}