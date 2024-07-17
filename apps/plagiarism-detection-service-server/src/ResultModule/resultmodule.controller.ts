import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ResultModuleService } from "./resultmodule.service";
import { RetrieveResultsInput } from "../resultModule/RetrieveResultsInput";
import { RetrieveResultsOutput } from "../resultModule/RetrieveResultsOutput";

@swagger.ApiTags("resultModules")
@common.Controller("resultModules")
export class ResultModuleController {
  constructor(protected readonly service: ResultModuleService) {}

  @common.Get("/results")
  @swagger.ApiOkResponse({
    type: RetrieveResultsOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveResults(
    @common.Body()
    body: RetrieveResultsInput
  ): Promise<RetrieveResultsOutput[]> {
        return this.service.RetrieveResults(body);
      }
}
