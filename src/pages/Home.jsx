import { Divider, Typography } from "@mui/material";
import Articles from "../components/Articles";
import Hero from "../components/Hero";
import HomeDivider from "../components/HomeDivider";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider
        sx={{
          borderWidth: "5",
          borderColor: "black",
          marginTop: "2em",
          marginBottom: "1em",
        }}
      ></Divider>
      <Typography variant="h5" fontStyle="italic">
        As an <strong>engineering leader and a Machine Learning expert</strong>,
        I'm driven by the limitless potential of technology to positively
        transform our world. With years of experience in the academy and
        industry, being part of and leading{" "}
        <strong>cross-functional teams</strong>, I've developed a unique
        perspective on leveraging machine learning to solve complex problems and
        create innovative solutions that deliver{" "}
        <strong>incremental value to customers</strong>.
      </Typography>
      <Typography variant="h5" marginTop={2} fontStyle="italic">
        I'm passionate about developing and inspiring individuals to realize
        their <strong>full potential and achieve exceptional results</strong>.
        My focus on staying at the forefront of the latest advancements in
        machine learning, combined with my ability to collaborate with diverse
        teams, enables me to deliver <strong>cutting-edge products </strong>that
        make a difference in people's lives.
      </Typography>
      <Typography variant="h5" marginTop={2} fontStyle="italic">
        I have a decade of experience in Natural Language Processing and Machine
        learning which helped me publish my research in venues like{" "}
        <strong>
          EACL, the Journal of Artificial Intelligence Research, and SemEval{" "}
        </strong>
        .
      </Typography>

      <Work></Work>
      <HomeDivider id="research" label="RESEARCH"></HomeDivider>
      <Articles />
    </>
  );
}
