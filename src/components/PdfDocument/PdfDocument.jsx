
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PdfDocument = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title} fixed>
          Understanding React: Uncontrolled vs. Controlled Components,
          PropTypes, Node.js vs. Express.js, and Custom Hooks
        </Text>
        <Text style={styles.header}>Uncontrolled vs Controlled Components</Text>
        <Text style={styles.text}>
          React component can be controlled or uncontrolled it's depent how to
          handle you. Controlled component have their own state management
          system and user input is handled by through the component state.
          Uncontrolled components, where the state of the component is handled
          by the DOM and React does not have any control over it.
        </Text>
        <Text style={styles.header}>
          How to Validate React Props using PropTypes
        </Text>
        <Text style={styles.text}>
          PropTypes is a library for React. That can be validate type of props
          passed to a commponent. This can help us catch error on the
          Development.
        </Text>
        <Text style={styles.header}>Node.js vs Express.js</Text>
        <Text style={styles.text}>
          Node.js is a runtime environment for executing javascript code outside
          of a web browser. It allows developer to write server-side application
          using javascript. Express.js is a web framework build on top of
          Node.js. It provide a simple way to build web application and APIs.
        </Text>
        <Text style={styles.header}>Custom Hooks in React</Text>
        <Text style={styles.text}>
          Custom hook is a functional component that have common logic and it
          can be reuse for different react component.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PdfDocument;