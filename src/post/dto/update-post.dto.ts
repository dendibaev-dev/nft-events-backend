import { Type } from "class-transformer";
import { IsBoolean } from "class-validator";


export class UpdatePostDto {

    @IsBoolean()
    @Type(() => Boolean)
    waiting: boolean
}