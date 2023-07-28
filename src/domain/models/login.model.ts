import { SecurityLoginOutput } from "src/usecases/security/security-login.output";
import { UserModel } from "./user.model";

export class LoginModel {

    username: string;
    password: string;
    token: string;

    public toOutput(userModel: UserModel, token: string): SecurityLoginOutput {

        const loginModel = new LoginModel();
        loginModel.username = userModel.username;
        loginModel.password = userModel.password;
        loginModel.token = token;

        return {
            user: loginModel
        };

    }
}