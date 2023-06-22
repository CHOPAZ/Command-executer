import { ICommandExec } from "../../core/executor/command.types";

export interface IFfmpegInput {
  width: number;
  height: number;
  path: string;
  nameFile: string;
}

export interface ICommandExecFfmpeg extends ICommandExec {
  output: string
}