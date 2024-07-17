import { Injectable } from "@nestjs/common";
import { SubmitDocumentInput } from "../documentModule/SubmitDocumentInput";
import { SubmitDocumentOutput } from "../documentModule/SubmitDocumentOutput";

@Injectable()
export class DocumentModuleService {
  constructor() {}
  async SubmitDocument(args: SubmitDocumentInput): Promise<SubmitDocumentOutput> {
    throw new Error("Not implemented");
  }
}
