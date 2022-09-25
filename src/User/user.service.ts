import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/Models/user-entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity> 
    ) {}

    /* TODO Look for create repo and complete the user folder:  */

}