export const UPLOAD_CONSTRAINTS = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
  ALLOWED_TYPES: ['video/*'] as const
} as const;

export const UPLOAD_ERRORS = {
  BLOB_NOT_CONFIGURED: 'Blob storage not configured',
  NO_FILE_PROVIDED: 'No file provided',
  UPLOAD_FAILED: 'Upload failed',
  FILE_TOO_LARGE: (maxSize: number) => `File size exceeds ${maxSize / (1024 * 1024)}MB limit`,
  INVALID_TYPE: (types: string[]) => `Invalid file type. Allowed types: ${types.join(', ')}`
} as const;