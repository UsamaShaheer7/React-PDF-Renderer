import React from "react";
import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";
import RobotoBold from "../src/fonts/ibm/Roboto-Bold.ttf";
import RobotoMedium from "../src/fonts/ibm/Roboto-Medium.ttf";
import RobotoRegular from "../src/fonts/ibm/Roboto-Regular.ttf";
import RobotoLight from "../src/fonts/ibm/Roboto-Light.ttf";
import RobotoBlack from "../src/fonts/ibm/Roboto-Black.ttf";
import RobotoItalic from "../src/fonts/ibm/Roboto-Italic.ttf";
import RobotoLightItalic from "../src/fonts/ibm/Roboto-LightItalic.ttf";
import RobotoBoldItalic from "../src/fonts/ibm/Roboto-BoldItalic.ttf";
// Define styles using StyleSheet
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: RobotoItalic, // Path to your italic font file
      fontStyle: "Roboto-italic", // Font style: Italic
    },
    {
      src: RobotoLightItalic, // Path to your italic font file
      fontStyle: "italic", // Font style: Italic
    },
    {
      src: RobotoBoldItalic, // Path to your italic font file
      fontStyle: "Bold-italic", // Font style: Italic
    },
    {
      src: RobotoRegular, // Path to your regular font file
      fontWeight: 500, // Font weight: Normal
    },
    {
      src: RobotoBold, // Path to your bold font file
      fontWeight: "bold", // Font weight: Bold
    },
    {
      src: RobotoLight, // Path to your light font file
      fontWeight: 200, // Font weight: Light
    },
    {
      src: RobotoMedium, // Path to your medium font file
      fontWeight: 600, // Font weight: Medium
    },
    {
      src: RobotoBlack, // Path to your black font file
      fontWeight: 900, // Font weight: Black
    },
  ],
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: "50px",
  },
  firstContainer: {
    paddingTop: "20px",
    flexDirection: "row",
    width: "100%",
    marginBottom: "20px",
  },
  sidediv1: {
    width: 35,
    height: 70,
    backgroundColor: "#113D4E",
  },
  detailsContainer: {
    width: "100%", // Adjust this value to match your Tailwind CSS width
    paddingTop: 0,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 10, // Adjust this value to match your Tailwind CSS margin
  },
  informationContainer: {
    height: "100%",
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
  },
  texticon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10px",
  },
  emailIcon: {
    width: "12px",
    height: "10px",
  },
  phoneIcon: {
    width: "12px",
    height: "15px",
  },
  locationIcon: {
    width: "12px",
    height: "15px",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#113D4E",
    textTransform: "capitalize",
    fontFamily: "Roboto",
    fontWeight: 900,
  },
  designation: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d7e9b",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 11,
    color: "#000",
    width: "60%",
    fontFamily: "Roboto",
    fontStyle: "Roboto-italic",
  },
  divider: {
    marginTop: "10px",
    border: "0.5px solid black",
  },
  contactText: {
    fontSize: 12,
    color: "#000",
    marginRight: 5,
  },
  secondContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
  },
  leftContainer: {
    width: "55%",
  },
  rightContainer: {
    width: "45%",
    // marginLeft: "30px",
    paddingRight: "10px",
  },
  educationContent: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  experienceContent: { display: "flex", flexDirection: "row", marginTop: 10 },
  skillContent: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "5px",
  },
  skillText: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "12px",
    padding: "5px 10px",
    borderRadius: "10px", // rounded-[7px]
    backgroundColor: "#6B7280",
    color: "#fff",
    textTransform: "capitalize",
  },
  sidediv2: {
    width: 35,
    height: 55,
    backgroundColor: "#2d7e9b",
  },
});

// Define the content as a functional component
const Content = ({ formik, isShow }) => (
  <>
    <View style={styles.firstContainer}>
      <View style={styles.sidediv1} />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name}>Mohammad Usama Shaheer</Text>
          <Text style={styles.designation}>MERN</Text>
          <Text style={styles.description}>
            Dedicated and efficient Software Engineer with experience in
            designing, developing, and implementing applications and solutions
            using a range of technologies and programming languages. Seeking to
            leverage broad development experience and hands-on technical
            expertise in a challenging role as Software Engineer.
          </Text>
        </View>

        <View style={styles.informationContainer}>
          <View style={styles.texticon}>
            <Text style={styles.contactText}>usamashaheer@gmail.com</Text>
            <View>
              <Image src="/Email.png" style={styles.emailIcon} />
            </View>
          </View>
          <View style={styles.texticon}>
            <Text style={styles.contactText}>usamashaheer@gmail.com</Text>
            <View>
              <Image src="/phone.png" style={styles.phoneIcon} />
            </View>
          </View>
          <View style={styles.texticon}>
            <Text style={styles.contactText}>usamashaheer@gmail.com</Text>
            <View>
              <Image src="/location.png" style={styles.locationIcon} />
            </View>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.divider}></View>
    <View style={styles.secondContainer}>
      <View style={styles.leftContainer}>
        <View>
          <Text
            style={{ marginLeft: "45px", fontSize: 20, fontWeight: "bold" }}
          >
            Education
          </Text>
          <View style={styles.educationContent}>
            <View style={styles.sidediv2} />
            <View style={{ marginLeft: "10px" }}>
              <Text style={{ fontSize: "16px" }}>
                Master in Computer Science
              </Text>
              <Text style={{ fontSize: "12px" }}>
                Amity University Dubai Campus
              </Text>
              <Text style={{ fontSize: "10px", color: "#2d7e9b" }}>
                {/* {dayjs().format("YYYY-MM-DD")} */}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginLeft: "45px",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            WORK EXPERIENCE
          </Text>
          <View style={styles.experienceContent}>
            <View style={styles.sidediv2} />
            <View style={{ marginLeft: "10px" }}>
              <Text style={{ fontSize: "16px" }}>
                Master in Computer Science
              </Text>
              <Text style={{ fontSize: "12px" }}>
                Amity University Dubai Campus
              </Text>
              <Text style={{ fontSize: "10px", color: "#2d7e9b" }}>
                {/* {dayjs().format("YYYY-MM-DD")} */}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Skills</Text>
          <View style={styles.skillContent}>
            <View style={styles.skillText}>
              <Text>aaa</Text>
              <Text>bbb</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: "30px" }}>
            Certificate
          </Text>
          <View>
            <Text style={{ fontSize: "12px" }}>
              Mern Stack Developer and Content Writer
            </Text>
            <Text
              style={{
                fontSize: "10px",
                color: "#9AA1AB",
                fontStyle: "italic",
              }}
            >
              I got a Mern Stack course certificattion and Content writer course
              from coursera (Univ of Michigan)
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: "30px" }}>
            LANGUAGES
          </Text>
          <View>
            <View>
              <Text style={{ fontSize: "12px" }}>English</Text>
              <Text style={{ fontSize: "10px", color: "#2D7E9B" }}>
                Native or Bilingual Proficiency
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </>
);

// Define the PDF generator component
const Review = () => {
  return (
    <div className="">
      {/* PDF Viewer */}
      <PDFViewer style={{ width: "100%", height: "1230px" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <Content />
          </Page>
        </Document>
      </PDFViewer>

      {/* PDF Download Link */}
      {/* <PDFDownloadLink
        document={
          <Document>
            <Page>
              <Content />
            </Page>
          </Document>
        }
        fileName="example.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
      <img src="/CheckEmail.png" className=" w-[50px] h-[50px]" /> */}
    </div>
  );
};

export default Review;
