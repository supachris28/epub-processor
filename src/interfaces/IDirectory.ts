import { IFile } from "./IFile";

export interface IDirectory {
    storeRawEpub(file: IFile): Promise<void>;
    getFile(path: string): Promise<IFile>;
    getAllFiles(): Promise<IFile[]>;
}