import { CanActivate, ExecutionContext, forwardRef, Inject, Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { UserEntity } from "src/Models/user-entity";
import { UserService } from "src/User/user.service";

@Injectable()
export class UserIsUserGuard implements CanActivate {

    constructor(
        @Inject(forwardRef(() => UserService)) private userService: UserService
    ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        const params = request.params;
        const user: UserEntity = request.user;

        return this.userService.findOne(user.Id).pipe(
            map((user: UserEntity) => {
                let hasPermission = false;
                
                if(user.Id === params.id) {
                    hasPermission = true;
                }

                return user && hasPermission;                
            })
        )
    }


    
}