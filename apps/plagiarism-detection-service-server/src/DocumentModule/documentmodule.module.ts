import { Module } from "@nestjs/common";
import { DocumentModuleService } from "./documentmodule.service";
import { DocumentModuleController } from "./documentmodule.controller";
import { DocumentModuleResolver } from "./documentmodule.resolver";

@Module({
  controllers: [DocumentModuleController],
  providers: [DocumentModuleService, DocumentModuleResolver],
  exports: [DocumentModuleService],
})
export class DocumentModuleModule {}
