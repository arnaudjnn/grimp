import Container from "@/theme/components/container";
import Button from "@/theme/components/button";

export const theme = {
  components: {
    Container,
    Button,
  },
  styles: {
    global: {
      body: {
        bg: "rgb(249, 250, 251)",
        color: "rgb(29, 30, 28)",
      },
      "::selection": {
        color: "rgb(29, 30, 28)",
        background: "#e5f58e",
      },
    },
  },
};
