import React from "react"
import styled from "styled-components"

import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/Seo"
import Container from "../components/atoms/Container"
import Job from "../components/molecules/Job"

import { jobs } from "../data/jobs"

const Section = styled.section`
  margin: 2rem 0;

  @media print {
    border-bottom: 1pt solid #000;
    line-height: 1;
  }
`

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media print {
    font-size: 22pt;
  }
`
const JobTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0;

  @media print {
    font-size: 16pt;
  }
`

const Text = styled.p`
  font-size: 1.2rem;

  @media print {
    margin-top: 5pt;
    font-size: 11pt;
  }
`

const Title = styled.h2`
  font-size: 2.5rem;

  @media print {
    font-size: 22pt;
  }
`

const Jobs = styled.div`
  @media print {
    column-count: 2;
  }
`

const List = styled.ul`
  padding: 0 1rem;
  margin: 0;
  list-style: square;
`

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Section>
        <Name>Jacob Herper</Name>
        <JobTitle>Senior Front-End Engineer</JobTitle>
        <Text>
          As a passionate front-end developer, I create amazing websites and web
          apps to make the internet a better place. I am an advocate for web
          performance and accessibility as well as a JAMstack enthusiast with
          experience in serverless technologies.
        </Text>
      </Section>
      <Section>
        <Title>Work Experience</Title>
        <Jobs>
          {jobs.map(job => (
            <Job
              key={job.id}
              title={job.title}
              company={job.company}
              place={job.place}
              from={job.from}
              to={job.to}
            >
              <List>
                {job.tasks.map(task => (
                  <li>{task}</li>
                ))}
              </List>
            </Job>
          ))}
        </Jobs>
      </Section>
    </Container>
  </Layout>
)

export default IndexPage
