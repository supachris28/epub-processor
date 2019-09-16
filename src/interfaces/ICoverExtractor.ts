import { IFile } from "./IFile";
import { IDirectory } from "./IDirectory";
import { IManifest } from "./IManifest";

export interface ICoverExtractor {
  extractCover(dir: IDirectory, manifest: IManifest): IFile;
}