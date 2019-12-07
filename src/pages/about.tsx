import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/Seo"
import Container from "../components/atoms/Container"
import Job from "../components/molecules/Job"

import { jobs } from "../data/jobs"
import { skills } from "../data/skills"

const IndexPage = () => {
  const [loadedJobs, loadMore] = useState(false)

  const initialJobs = jobs.slice(0, 2)
  const displayJobs = loadedJobs ? jobs : initialJobs

  const {
    technologies,
    frameworks,
    databases,
    cms,
    various,
    design,
    softSkills,
    languages,
  } = skills

  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Section>
          <Name>Jacob Herper</Name>
          <JobTitle>Senior Front-End Engineer</JobTitle>
          <Text>
            As a passionate front-end developer, I create amazing websites and
            web apps to make the internet a better place. I am an advocate for
            web performance and accessibility as well as a JAMstack enthusiast
            with experience in serverless technologies.
          </Text>
        </Section>
        <Section>
          <Title>Skills</Title>
          <WithSidebar>
            <main>
              {technologies.map((item, index) => (
                <Badge
                  key={`technologies-${index + 1}`}
                  className="--technologies"
                >
                  {item}
                </Badge>
              ))}
              {frameworks.map((item, index) => (
                <Badge key={`frameworks-${index + 1}`} className="--frameworks">
                  {item}
                </Badge>
              ))}
              {databases.map((item, index) => (
                <Badge key={`databases-${index + 1}`} className="--databases">
                  {item}
                </Badge>
              ))}
              {cms.map((item, index) => (
                <Badge key={`cms-${index + 1}`} className="--cms">
                  {item}
                </Badge>
              ))}
              {various.map((item, index) => (
                <Badge key={`skills-${index + 1}`}>{item}</Badge>
              ))}
              {design.map((item, index) => (
                <Badge key={`design-${index + 1}`} className="--design">
                  {item}
                </Badge>
              ))}
            </main>
            <aside>
              <h2>Soft skills</h2>
              {/* {softSkills.join(", ")} */}
              {softSkills.map((item, index) => (
                <Badge key={`softskill-${index + 1}`} className="--softskill">
                  {item}
                </Badge>
              ))}

              <h2>Languages</h2>
              {languages.map((language, index) => (
                <li key={`language-${index}`}>
                  {language.language} ({language.proficiency})
                </li>
              ))}
            </aside>
          </WithSidebar>
        </Section>
        <Section>
          <Title>Work Experience</Title>
          <Jobs>
            {displayJobs.map(job => (
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
          {!loadedJobs ? (
            <Button onClick={() => loadMore(true)}>Show more</Button>
          ) : (
            <Button onClick={() => loadMore(false)}>Show less</Button>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default IndexPage

const Section = styled.section`
  margin: 2rem 0;

  @media print {
    border-bottom: 1pt solid #000;
    line-height: 1;
  }
`

const WithSidebar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  main {
    min-width: 280px;
  }

  aside {
    min-width: 280px;

    h2:first-of-type {
      margin: 0 0.5rem 0 0;
      display: inline-block;
      font-size: 1em;
      &:after {
        content: ": ";
      }
    }
  }
`

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border-radius: 99px;
  background: #333;
  color: #fff;

  &.--technologies {
    background: #3e4153;
  }
  &.--frameworks {
    background: #1671cf;
  }
  &.--databases {
    background: #64cf16;
  }
  &.--cms {
    background: #e94e1b;
  }
  &.--design {
    background: #d03333;
  }

  @media print {
    background: transparent;
    color: #000;
    border: 1px solid #000;
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

const PrintOnly = styled.div`
  display: none;
  @media print {
    display: unset;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin: 0 auto;

  @media print {
    display: none;
  }
`
