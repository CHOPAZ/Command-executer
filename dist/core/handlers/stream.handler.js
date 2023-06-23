"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamHandler = void 0;
//обработка вывода
class StreamHandler {
    constructor(logger) {
        this.logger = logger;
    }
    processOutput(stream) {
        // подписка на stream, когда приходит data
        stream.stdout.on('data', (data) => {
            this.logger.log(data.toString());
        });
        //когда ошибка
        stream.stderr.on('data', (data) => {
            this.logger.error(data.toString());
        });
        //подписка на окончании работы spawn
        stream.on('close', () => {
            this.logger.end();
        });
    }
}
exports.StreamHandler = StreamHandler;
