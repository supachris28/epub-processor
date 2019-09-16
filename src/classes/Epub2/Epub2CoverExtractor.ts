import { ICoverExtractor } from "../../interfaces/ICoverExtractor";
import { IFile } from "../../interfaces/IFile";
import { IDirectory } from "../../interfaces/IDirectory";
import { IManifest } from "../../interfaces/IManifest";
import { ILogger } from "../../interfaces/ILogger";

export class Epub2CoverExtractor implements ICoverExtractor {
  private logger: ILogger;
  public constructor(logger: ILogger) {
    this.logger = logger;
  }

  public extractCover(dir: IDirectory, manifest: IManifest): IFile {
    throw new Error("Method not implemented.");
  }

}