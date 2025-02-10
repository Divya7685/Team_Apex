import { CardWrapper } from "./card-wrapper"
const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Dont have an account?"
            backButtonHref='/auth/register'
            showSocial>
            Login Form!
        </CardWrapper>
    );
}
export default LoginForm;