import { IDirectory } from "../../interfaces/IDirectory";
import { IFile } from "../../interfaces/IFile";
import { S3 } from 'aws-sdk';

export class S3Directory implements IDirectory {
  private bucket: string;
  private s3: S3;
  constructor(region: string, bucket: string) {
    this.bucket = bucket;
    this.s3 = new S3({ region });
  }

  async storeRawEpub(file: IFile): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getFile(path: string): Promise<IFile> {
    const s3data = await this.s3.getObject({ Bucket: this.bucket, Key: path })
      .promise();

    return <IFile>{
      fileName: this.getFileNameFromPath(path),
      getContents: () => this.getBufferFromBody(s3data.Body),
    };
  }

  async getAllFiles(): Promise<IFile[]> {
    throw new Error("Method not implemented.");
  }

  private getFileNameFromPath(path: string): string {
    return path.split('/').slice(-1)[0];
  }

  private getBufferFromBody(data: any): Buffer {
    let contents = Buffer.from('');
    if (data instanceof Buffer) contents = data;
    if (data instanceof Uint8Array) contents = Buffer.from(data);
    if (typeof data === 'string') contents = Buffer.from(data);

    return contents;
  }
}