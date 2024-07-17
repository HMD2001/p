import { Injectable } from "@nestjs/common";
import { InitiateAnalysisInput } from "../analysisModule/InitiateAnalysisInput";
import { InitiateAnalysisOutput } from "../analysisModule/InitiateAnalysisOutput";

@Injectable()
export class AnalysisModuleService {
  constructor() {}
  async InitiateAnalysis(args: InitiateAnalysisInput): Promise<InitiateAnalysisOutput> {
    throw new Error("Not implemented");
  }
}
