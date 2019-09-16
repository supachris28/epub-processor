export interface IFile {
  fileName: string;
  getContents(): Buffer;
}