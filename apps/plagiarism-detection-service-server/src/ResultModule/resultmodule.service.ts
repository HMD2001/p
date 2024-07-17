import { Injectable } from "@nestjs/common";
import { RetrieveResultsInput } from "../resultModule/RetrieveResultsInput";
import { RetrieveResultsOutput } from "../resultModule/RetrieveResultsOutput";

@Injectable()
export class ResultModuleService {
  constructor() {}
  async RetrieveResults(args: RetrieveResultsInput): Promise<RetrieveResultsOutput[]> {
    throw new Error("Not implemented");
  }
}
