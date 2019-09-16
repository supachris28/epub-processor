import { ICoverExtractor } from "../../interfaces/ICoverExtractor";
import { IFile } from "../../interfaces/IFile";
import { IDirectory } from "../../interfaces/IDirectory";
import { IManifest } from "../../interfaces/IManifest";

export class Epub2CoverExtractor implements ICoverExtractor {
  extractCover(dir: IDirectory, manifest: IManifest): IFile {
    throw new Error("Method not implemented.");
  }

}