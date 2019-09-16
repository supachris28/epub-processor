import { IManifest } from '../../interfaces/IManifest';
import { IFile } from '../../interfaces/IFile';
import { IDirectory } from '../../interfaces/IDirectory';
import { ILogger } from '../../interfaces/ILogger';

export class Epub2Manifest implements IManifest {
  private logger: ILogger;
  private spine: string[];
  private rawFile: IFile;
  private dir: IDirectory;

  public constructor(dir: IDirectory, logger: ILogger) {
    this.logger = logger;
    this.spine = [];
    this.dir = dir;
  }

  public async initialise(): Promise<void> {
    await this.extractFiles();
    this.processOpf();
  }

  private async extractFiles(): Promise<void> {
    // To-do: extract manifest file to [this.rawFile]
  }

  private processOpf() {
    // To-do: extract spine from manifest file [this.rawFile]
  }

  public getSpine(): string[] {
    return this.spine;
  }
}