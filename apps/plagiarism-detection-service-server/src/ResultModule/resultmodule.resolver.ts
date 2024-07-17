import * as graphql from "@nestjs/graphql";
import { RetrieveResultsInput } from "../resultModule/RetrieveResultsInput";
import { RetrieveResultsOutput } from "../resultModule/RetrieveResultsOutput";
import { ResultModuleService } from "./resultmodule.service";

export class ResultModuleResolver {
  constructor(protected readonly service: ResultModuleService) {}

  @graphql.Query(() => [RetrieveResultsOutput])
  async RetrieveResults(
    @graphql.Args()
    args: RetrieveResultsInput
  ): Promise<RetrieveResultsOutput[]> {
    return this.service.RetrieveResults(args);
  }
}
