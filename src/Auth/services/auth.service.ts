import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { from, Observable } from "rxjs";
import { UserEntity } from "src/Models/user-entity";

/* REQUIRES */
const bcrypt = require('bcrypt');


@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService
    ) {}

    public generateJWT(user: UserEntity): Observable<string> {
        return from(this.jwtService.signAsync({user}));
    }

    public hashPassword(password: string): Observable<string> {
        return from<string>(bcrypt.hash(password, 12));
    }

    public comparePasswords(newPassword: string, passwordHash: string): Observable<any> {
        return from(bcrypt.compare(newPassword, passwordHash));
    }





}