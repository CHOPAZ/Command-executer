import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "./stream-logger.interface";

//обработка вывода
export class StreamHandler {
  constructor(private logger: IStreamLogger) {}

  processOutput(stream: ChildProcessWithoutNullStreams) {
    // подписка на stream, когда приходит data
    stream.stdout.on('data', (data: any) => {
      this.logger.log(data.toString())
    });
    //когда ошибка
    stream.stderr.on('data', (data: any) => {
      this.logger.error(data.toString())
    });
    //подписка на окончании работы spawn
    stream.on('close', () => {
      this.logger.end()
    });
  }
}