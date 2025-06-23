import {
  Box,
  Button,
  Drawer,
  Flex,
  Image,
  Portal,
  Text,
} from "@chakra-ui/react";
import HeaderAndNavDialog from "../atoms/HeaderAndNavDialog";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const navItems = [
  { toLink: "/home", children: "HOME" },
  { toLink: "/calendar", children: "CALENDER" },
  { toLink: "/todo", children: "TODO" },
];

const HomePageMenuButtonDrawer = (props: Props) => {
  const { open, setOpen } = props;

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={{ sm: "sm", lg: "xl" }}
    >
      <Drawer.Backdrop />
      <Drawer.Trigger asChild>
        <Button
          display={{ base: "block", md: "none" }}
          aria-label="menu button"
          position={"absolute"}
          right={"5px"}
          top={"clamp(50px,8vh,80px)"}
          w={"10%"}
          h={"4%"}
          _hover={{
            "& .child-box": {
              transform: "translateX(-1vw)",
            },
          }}
          zIndex={1}
        >
          <Flex direction={"column"} align={"center"} justify={"center"}>
            <Text
              fontSize={{ base: "10px", md: "20px", lg: "24px" }}
              position={"relative"}
              left={"1"}
            >
              メニュー
            </Text>
            <Box
              w={"clamp(40px, 11vw, 0px)"}
              className="child-box"
              transition={".3s"}
            >
              <Image src="/home_page_nav_button_v2.svg" />
            </Box>
          </Flex>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body
              bgImage={"url(/bgwallpaper.jpg)"}
              bgSize={"400px 200px"}
              bgRepeat={"repeat"}
              rounded={"md"}
            >
              <ul style={{ listStyle: "none" }}>
                <Flex
                  w={"100%"}
                  align={"center"}
                  direction={"column"}
                  mt={"clamp(30px, 3vw, 100px)"}
                  gap={"clamp(50px, 4vw, 200px)"}
                >
                  
                  {navItems.map((item) => (
                    <HeaderAndNavDialog
                      key={item.toLink}
                      toLink={item.toLink}
                      children={item.children}
                      setOpen={setOpen}
                    />
                  ))}

                  <Drawer.CloseTrigger asChild>
                    <Button
                      display={"block"}
                      aria-label="back button"
                      w={"30%"}
                      justifyContent={"flex-end"}
                      _hover={{
                        "& .child-box": {
                          transform: "translateX(-10px)",
                        },
                      }}
                    >
                      <Flex
                        direction={"column"}
                        align={"center"}
                        justify={"center"}
                      >
                        <Text
                          fontSize={"clamp(16px, 1.5vw, 30px)"}
                          position={"relative"}
                          left={"5px"}
                          bottom={"clamp(4px, 1vw, 8px)"}
                        >
                          戻る
                        </Text>

                        <Box
                          w={"clamp(60px, 4vw, 140px)"}
                          position={"relative"}
                          bottom={"8px"}
                          className="child-box"
                          transition={".3s"}
                        >
                          <Image src="/home_page_nav_button_v2.svg" />
                        </Box>
                      </Flex>
                    </Button>
                  </Drawer.CloseTrigger>
                </Flex>
              </ul>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
export default HomePageMenuButtonDrawer;
