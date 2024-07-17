import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalysisModuleService } from "./analysismodule.service";
import { InitiateAnalysisInput } from "../analysisModule/InitiateAnalysisInput";
import { InitiateAnalysisOutput } from "../analysisModule/InitiateAnalysisOutput";

@swagger.ApiTags("analysisModules")
@common.Controller("analysisModules")
export class AnalysisModuleController {
  constructor(protected readonly service: AnalysisModuleService) {}

  @common.Post("/analysis")
  @swagger.ApiOkResponse({
    type: InitiateAnalysisOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiateAnalysis(
    @common.Body()
    body: InitiateAnalysisInput
  ): Promise<InitiateAnalysisOutput> {
        return this.service.InitiateAnalysis(body);
      }
}
