"use client";
import React from "react";
import type { NextPage } from "next";
import * as G from "../../styles/homeStyles";

const Home: NextPage = () => {
  return (
    <G.HomeBackground>
      <G.Header>
        <G.HeaderTitle>
          {" "}
          <span>Mikael Farias</span>{" "}
          <span style={{ color: "#919191", fontSize: "24px" }}>
          Full Stack Web Developer
          </span>{" "}
        </G.HeaderTitle>
        <G.Nav>
          <G.NavLink href="#about">Curriculum</G.NavLink>
          <span style={{ fontSize: "32px", color: "#636363" }}>|</span>
          <G.NavLink href="#projects">Projects</G.NavLink>
          <span style={{ fontSize: "32px", color: "#636363" }}>|</span>
          <G.NavLink href="#contact">Contact</G.NavLink>
        </G.Nav>
      </G.Header>

      <G.Section id="about">
        <G.Image />
        <G.Description>
          <G.SectionTitle>Welcome!</G.SectionTitle>
          <G.Paragraph>
          My name is Mikael and I am currently studying Automation Engineering at the Federal University of Rio Grande. I have been working since 2023 with Full Stack Development, in which I use technologies such as NodeJS, React, Next, Typescript and so on. Feel free to explore the site and learn more about my experiences.
          </G.Paragraph>
        </G.Description>
      </G.Section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Mikael Farias. Todos os direitos reservados.</p>
      </footer>
    </G.HomeBackground>
  );
};

const styles = {
  header: {
    backgroundColor: "#0a0a0a",
    padding: "20px",
    textAlign: "center" as "center",
  },
  headerTitle: {
    margin: 0,
    color: "#00aaff",
  },
  nav: {
    marginTop: "20px",
    textAlign: "center" as "center",
  },
  navLink: {
    color: "#00aaff",
    textDecoration: "none" as "none",
    margin: "0 15px",
    fontWeight: "bold" as "bold",
  },
  section: {
    padding: "50px 20px",
    maxWidth: "900px",
    margin: "auto",
  },
  sectionTitle: {
    color: "#00aaff",
    marginBottom: "20px",
  },
  paragraph: {
    lineHeight: 1.6,
  },
  projects: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  project: {
    backgroundColor: "#1f1f1f",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
  projectTitle: {
    color: "#00aaff",
  },
  contact: {
    textAlign: "center" as "center",
  },
  contactLink: {
    color: "#00aaff",
    textDecoration: "none" as "none",
    display: "inline-block",
    margin: "10px 0",
  },
  resumeButton: {
    display: "inline-block",
    backgroundColor: "#00aaff",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none" as "none",
    borderRadius: "5px",
    marginTop: "20px",
  },
  footer: {
    backgroundColor: "#0a0a0a",
    margin: 0,
    padding: "20px",
    textAlign: "center" as "center",
    color: "#888",
  },
};

export default Home;
