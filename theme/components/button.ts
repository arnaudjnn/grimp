export default {
  baseStyle: {
    borderRadius: ".5rem",
    fontWeight: "500",
  },
  variants: {
    solid: {
      bg: "#e5f58e",
      color: "#1d1e1c",
      _hover: {
        bg: "#e5f58e",
        boxShadow: "inset 0 0 0 100px rgba(0,0,0,.05)",
      },
      _active: {
        bg: "#e5f58e",
        boxShadow: "inset 0 0 0 100px rgba(0,0,0,.1)",
      },
    },
  },
};
