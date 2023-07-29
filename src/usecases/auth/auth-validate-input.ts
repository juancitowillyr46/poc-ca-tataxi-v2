import { LoginModel } from "src/domain/models/login.model";

export interface AuthValidateInput {
    user: LoginModel
}