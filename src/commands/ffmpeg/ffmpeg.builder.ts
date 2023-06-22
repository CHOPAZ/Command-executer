export class FfmpegBuilder {
  private inputPath: string;
  private outputPath: string;
  private options: Map<string, string> = new Map();

  constructor() {
    this.options.set('-c:v', 'libx264');
  }

  input(inputPath: string) {
    this.inputPath = inputPath;
    return this
  }

  setVideoSize(width: number, height: number) {
    this.options.set('-s', `${width}x${height}`)

    return this
  }

  output(outputPath: string) {
    this.outputPath = outputPath;
  }


}