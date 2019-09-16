import { IEpub } from '../../interfaces/IEpub';
import { IDirectory } from '../../interfaces/IDirectory';
import { Epub2TocNcx } from './epub2TocNcx';
import { Epub2Manifest } from './Epub2Manifest';
import { Epub2CoverExtractor } from './Epub2CoverExtractor';
import { ILogger } from '../../interfaces/ILogger';

export class EPub2 implements IEpub {
  private logger: ILogger;
  private dir: IDirectory;
  public toc: Epub2TocNcx;
  public manifest: Epub2Manifest;
  public coverExtractor: Epub2CoverExtractor;

  public constructor(dir: IDirectory, logger: ILogger) {
    this.dir = dir;
    this.logger = logger;
    this.manifest = new Epub2Manifest(dir, this.logger);
    this.toc = new Epub2TocNcx(dir, this.logger);
    this.coverExtractor = new Epub2CoverExtractor(this.logger);
  }

  public async initialise() {
    this.manifest.initialise();
    this.toc.initialise();
  }

  public async process(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}