export default {
  baseStyle: {
    position: "relative",
    overflow: "hidden",
    maxWidth: "100%",
    px: {
      base: 4,
      lg: 8,
    },
  },
  defaultProps: {
    size: "default",
  },
  sizes: {
    default: {
      py: {
        base: 20,
        lg: 32,
      },
    },
    ptHeader: {
      pt: {
        base: "calc(5rem + 96px)",
        lg: "calc(8rem + 96px)",
      },
      pb: {
        base: 20,
        lg: 32,
      },
    },
    "ptHeader.pt50": {
      pt: {
        base: "calc(2.5rem + 96px)",
        lg: "calc(4rem + 96px)",
      },
      pb: {
        base: 20,
        lg: 32,
      },
    },
  },
};
