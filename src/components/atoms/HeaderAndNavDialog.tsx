import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router";

type Props = {
  toLink: string;
  children: string;
  setOpen: (open: boolean) => void;
};

const HeaderAndNavDialog = memo((props: Props) => {
  const { toLink, children, setOpen } = props;

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false);
        }}
      >
        <Link to={toLink}>
          <Flex
            direction={"row"}
            align={"center"}
            justify={"space-between"}
            position={"relative"}
            w={"clamp(220px, 30vw, 500px)"}
            _hover={{
              "& .child-box-left": {
                transform: "translateX(-10px)",
              },
              "& .child-box-right": {
                transform: "translateX(10px)",
              },
              "& .child-box-text": {
                color: "red.600",
              },
            }}
          >
            <Box
              className="child-box-left"
              style={{ transition: "transform 0.3s" }}
              height={"auto"}
              width={"clamp(40px, 2.5vw, 120px)"}
            >
              <Image src="/divider-nav_decoration_left.svg" />
            </Box>

            <Box className="child-box-text">
              <Text fontSize={"clamp(12px, 1vw, 30px)"}>{children}</Text>
            </Box>

            <Box
              height={"auto"}
              width={"clamp(40px, 2.5vw, 120px)"}
              className="child-box-right"
              style={{ transition: "transform 0.3s" }}
            >
              <Image src="/divider-nav_decoration_right.svg" />
            </Box>
          </Flex>
        </Link>
      </Button>
    </>
  );
});
export default HeaderAndNavDialog;
