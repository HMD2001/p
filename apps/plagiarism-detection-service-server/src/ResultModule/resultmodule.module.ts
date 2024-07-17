import { Module } from "@nestjs/common";
import { ResultModuleService } from "./resultmodule.service";
import { ResultModuleController } from "./resultmodule.controller";
import { ResultModuleResolver } from "./resultmodule.resolver";

@Module({
  controllers: [ResultModuleController],
  providers: [ResultModuleService, ResultModuleResolver],
  exports: [ResultModuleService],
})
export class ResultModuleModule {}
