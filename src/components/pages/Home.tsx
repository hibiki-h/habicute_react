import { Box, Flex, Image } from "@chakra-ui/react";
import { FormEvent, memo, useState } from "react";
import HomePageContactForm from "../morcules/HomePageContactForm";
import HomePageContactFormMessage from "../morcules/HomePageContactFormMessage";
import HomePageSectionTitle from "../atoms/HomePageSectionTitle";
import HomePageButton from "../atoms/HomePageButton";
import AxiosInstance from "@/api/todoListsApi";
import { useTodo } from "@/providers/ContentProvider";
import { useAuth } from "@/providers/AuthContext";

const Home = memo(() => {
  const about_this_app_text = `本当にやらなければいけないことを続けられない人のために

習慣化の方法を科学的に立証した本
「やり抜く人の9つの習慣（9 things successful people do differently）」
を参考に作成したwebアプリ

このアプリを通じて
長期的目標の達成を
本気で望み
現状を変えたいと思っている方に
微力ながら力になればと思い
作成しました

「habit(習慣)」＋「execute(実行する)」＝「habicute」 

【使い方】
TODOページで
タスクの作成・編集・削除

CALENDERページで作成したタスクを
カレンダーに追加
その後、追加したタスクの
編集・削除
※スマホの場合は任意のタスク
または入れたい箇所を長押しで
追加等できます

【背景】

このアプリは
2022年12月の年末に掲げた目標を
2年後の同じ月になってもまだ実現できていない自分に
「現状維持の人生は理想の人生じゃない」
ととても焦りを覚え

改善点を模索していた際に見つけた
上記本のエビデンスベースの
習慣化の内容にとても興味がわき

web上でもその内容を実勢できれば
いつでもタスクを確認でき
便利だろうと思ったためです

私自身も、習慣化はまだ道半ばですが
同じ気持ちの方と一緒に努力できれば
幸いです

些細な事でもかまいません
このサイトについて何かありましたら
下記フォームにて
ご連絡いただけますと幸いです`;

  const { handleScroll } = useTodo();

  const { handleEmailError } = useAuth();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const emptyForm = { name: "", email: "", message: "" };

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const isEmpty = !form.name || !form.email || !form.message;

    if (isEmpty) {
      alert("すべて入力してください");
      return;
    }

    const isEmailValid = handleEmailError(form);

    if (isEmailValid) {
      try {
        setIsLoading(true);
        await AxiosInstance.post("api/contact/", form);
        alert("メッセージが送信されました");
      } catch (error) {
        alert("メッセージ送信失敗");
        console.log(`error : ${error}`);
      } finally {
        setIsLoading(false);
        setForm(emptyForm);
        handleScroll();
      }
    } else {
      alert("正しいメールアドレスで入力してください");
    }
  };

  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        width={"100%"}
        m={"clamp(40px, 5vw, 350px) 0"}
        pb={"clamp(50px, 6vw, 200px)"}
      >
        <HomePageSectionTitle
          sectionTitle={"このアプリについて"}
          sectionComment={about_this_app_text}
        />

        <Box
          m={"clamp(60px, 16vw, 250px) 0"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Image
            src="/home_page_content_divider.svg"
            w={"clamp(180px, 25vw, 1000px)"}
          />
        </Box>

        <HomePageSectionTitle sectionTitle={"問い合わせ"} />

        <Flex
          w={"100%"}
          align={"center"}
          direction={"column"}
          as={"form"}
          onSubmit={handleSubmit}
        >
          <Box maxW={"35%"}>
            <HomePageContactForm
              form={form}
              setForm={setForm}
              formprop={"name"}
            >
              Name
            </HomePageContactForm>

            <HomePageContactForm
              form={form}
              setForm={setForm}
              formprop={"email"}
            >
              Email
            </HomePageContactForm>

            <HomePageContactFormMessage
              form={form}
              setForm={setForm}
              formprop={"message"}
            >
              Message
            </HomePageContactFormMessage>
          </Box>

          <Box mx={"clamp(80px, 2vw, 150px)"}>
            <HomePageButton children="送信" isLoading={isLoading} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
});
export default Home;
