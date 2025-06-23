import { memo } from "react";
import LoginAndSingupPageLayout from "../organisms/LoginAndSingupPageLayout";

const Signup = memo(() => {
  return (
    <>
      <LoginAndSingupPageLayout
        pageTitle="アカウント登録"
        toLink="/login"
        toLinkTitle="ログイン"
      />
    </>
  );
});
export default Signup;
