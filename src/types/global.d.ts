export {}

declare global {
  interface UploadImageProps {
    uri: string
    type: string
    name: string
  }
  interface FormData {
    append(name: string, value: UploadImageProps): void
    append(name: string, value: string | Blob): void
    append(name: string, value: Blob, filename?: string): void
  }
}
