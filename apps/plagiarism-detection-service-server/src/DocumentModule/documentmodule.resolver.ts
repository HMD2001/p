import * as graphql from "@nestjs/graphql";
import { SubmitDocumentInput } from "../documentModule/SubmitDocumentInput";
import { SubmitDocumentOutput } from "../documentModule/SubmitDocumentOutput";
import { DocumentModuleService } from "./documentmodule.service";

export class DocumentModuleResolver {
  constructor(protected readonly service: DocumentModuleService) {}

  @graphql.Mutation(() => SubmitDocumentOutput)
  async SubmitDocument(
    @graphql.Args()
    args: SubmitDocumentInput
  ): Promise<SubmitDocumentOutput> {
    return this.service.SubmitDocument(args);
  }
}
