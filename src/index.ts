import { IEpub } from "./interfaces/IEpub";

export default {
    async process() {
    // get IDirectory provider for file IO
    // Could be local FS, remote FS or even APIs

    // Identify type of epub and initialise IEpub implementation as necessary
    let epub: IEpub;
    await epub.initialise()
    await epub.process();
  }
}
