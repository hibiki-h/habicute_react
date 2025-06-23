import { FC, memo } from "react";
import LoginAndSingupPageLayout from "../organisms/LoginAndSingupPageLayout";

const Login:FC = memo(() => {
  return (
    <>
      <LoginAndSingupPageLayout
        pageTitle="ログイン"
        toLink="/signup"
        toLinkTitle="アカウント登録"
      />
    </>
  );
});
export default Login;
