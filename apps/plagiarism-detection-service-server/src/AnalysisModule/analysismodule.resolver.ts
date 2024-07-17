import * as graphql from "@nestjs/graphql";
import { InitiateAnalysisInput } from "../analysisModule/InitiateAnalysisInput";
import { InitiateAnalysisOutput } from "../analysisModule/InitiateAnalysisOutput";
import { AnalysisModuleService } from "./analysismodule.service";

export class AnalysisModuleResolver {
  constructor(protected readonly service: AnalysisModuleService) {}

  @graphql.Mutation(() => InitiateAnalysisOutput)
  async InitiateAnalysis(
    @graphql.Args()
    args: InitiateAnalysisInput
  ): Promise<InitiateAnalysisOutput> {
    return this.service.InitiateAnalysis(args);
  }
}
