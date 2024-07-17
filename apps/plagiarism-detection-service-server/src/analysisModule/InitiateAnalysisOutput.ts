import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("InitiateAnalysisOutputObject")
class InitiateAnalysisOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    analysisId!: string;
}

export { InitiateAnalysisOutput as InitiateAnalysisOutput };