import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("RetrieveResultsOutputObject")
class RetrieveResultsOutput {
    @Field(() => [[GraphQLJSON]])
    analysisResults!: InputJsonValue[];
}

export { RetrieveResultsOutput as RetrieveResultsOutput };