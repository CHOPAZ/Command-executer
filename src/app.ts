import { FfmegExecuter } from "./commands/ffmpeg/ffmpeg.executer";
import { ConsoleLogger } from "./out/console-logger/console-logger";

export class App {
  async run() {
    new FfmegExecuter(ConsoleLogger.getInstance()).execute()
  }
}

const app = new App();
app.run()