import { promises } from "fs";
import { dirname, isAbsolute, join } from "path";

export class FileService {
  private async isExist(path: string) {
    try {
      await promises.stat(path);
      return true
    } catch {
      return false
    }
  }

  //полный путь сохранения
  public getFilePath(path: string, name: string, ext: string): string {
    if (!isAbsolute(path)) {
      path = join(__dirname + '/' + path); // __dirname - текущая рабочая директоия
    }
    return join(dirname(path) + '/' + name + '.' + ext); // dirname(path - функция получения директории по пути
  }
  //удаление файла перед spawn, если он есть
  async deleteFileIfExists(path: string) {
    if (await this.isExist(path)) {
      promises.unlink(path);
    }
  }
}