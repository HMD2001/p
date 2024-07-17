import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DocumentModuleService } from "./documentmodule.service";
import { SubmitDocumentInput } from "../documentModule/SubmitDocumentInput";
import { SubmitDocumentOutput } from "../documentModule/SubmitDocumentOutput";

@swagger.ApiTags("documentModules")
@common.Controller("documentModules")
export class DocumentModuleController {
  constructor(protected readonly service: DocumentModuleService) {}

  @common.Post("/documents")
  @swagger.ApiOkResponse({
    type: SubmitDocumentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitDocument(
    @common.Body()
    body: SubmitDocumentInput
  ): Promise<SubmitDocumentOutput> {
        return this.service.SubmitDocument(body);
      }
}
