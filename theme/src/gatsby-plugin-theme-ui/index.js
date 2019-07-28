/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "rgb(34, 52, 97)",
    background: "#bcffca",
    primary: "#6be585",
    headerColor: "rgb(34, 52, 97)",
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "headerColor",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 0,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
        minHeight:"10vh"
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "100vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
      minHeight: "85vh"
    },
    h1: {
      color: "headerColor",
      fontSize: 5,
      lineHeight: "heading",
    },
  },
}
