export interface UploadResponse {
  url: string;
  success: boolean;
  error?: string;
}

export interface FileValidationOptions {
  maxSizeInBytes?: number;
  allowedTypes?: string[];
}