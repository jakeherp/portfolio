import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { getTextColor } from 'Templates/Layout';
import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';
import Job from 'Molecules/Job';
import Filter from 'Atoms/Filter';

import { jobs } from 'Data/jobs';
import { skills } from 'Data/skills';

const About = () => {
  const [loadedJobs, loadMore] = useState(false);
  const [filter, setFilter] = useState<string>('');

  const initialJobs = jobs.slice(0, 2);
  const displayJobs = loadedJobs ? jobs : initialJobs;

  const age = (birthday: string) => moment().diff(birthday, 'years');

  const skillCategories = Object.keys(skills);
  return (
    <>
      <SEO title="About" />
      <Container>
        <Section>
          <Name data-testid="headline">Hey, I'm Jacob Herper</Name>
          <JobTitle>A senior Front-End Engineer from London, UK</JobTitle>
          <Text>
            As a passionate front-end developer, I create amazing websites and
            web apps to make the internet a better place. I am an advocate for
            web performance and accessibility as well as a JAMstack enthusiast
            with experience in serverless technologies.
          </Text>
          <Text>
            I am {age('1990-11-06')} years old and have been a web developer for
            as long as I can think. The technologies I work with are JavaScript,
            HTML and CSS with a focus on the frameworks React.js, Gatsby,
            Next.js, Node and Express. I use code not only to do my day-to-day
            job, but also to solve everyday problems I come across.
          </Text>
          <Text>
            When I am not writing code I love to spend time with my wife and{' '}
            {age('2018-05-26')} year old daughter at home in London or
            travelling around the world. We are quite a multi-cultural family
            with me having grown up in Germany 🇩🇪 and my wife being from Mexico
            🇲🇽, which is why we raise our daughter trilingual. I myself speak
            five languages (some better than others). Furthermore I enjoy
            cooking fresh food when I come home after a long day at the office.
          </Text>
        </Section>
        <Section>
          <Title>Skills</Title>
          <WithSidebar>
            <main>
              <ScreenOnly>
                <div data-testid="filters">
                  Filter:
                  {skillCategories.map((skill) => (
                    <Filter
                      key={skill}
                      name={skill}
                      setFilter={setFilter}
                      currentFilter={filter}
                    />
                  ))}
                </div>
              </ScreenOnly>
              {skillCategories.map((category) => {
                const cat = skills[category];
                if (filter !== '' && filter !== category) return;
                return cat.map((ability: string, index: number) => (
                  <Badge
                    key={`${category}-${index + 1}`}
                    className={`--${category}`}
                  >
                    {ability}
                  </Badge>
                ));
              })}
              <h2>Soft skills</h2>
              {/* {softSkills.join(", ")} */}
              {[
                'Strong communication',
                'Leadership',
                'Problem solving',
                'Creative thinking',
                'Flexible and adaptive',
                'Team player',
                'Always on time',
              ].map((item, index) => (
                <Badge key={`softskill-${index + 1}`} className="--softskill">
                  {item}
                </Badge>
              ))}
            </main>
            <aside>
              <h2>Languages</h2>
              <ul>
                <li>🇬🇧 English (bilingual)</li>
                <li>🇩🇪 German (bilingual)</li>
                <li>🇪🇸 Spanish (intermediate)</li>
                <li>🇮🇹 Italian (basic)</li>
                <li>🇷🇺 Russian (basic)</li>
              </ul>
            </aside>
          </WithSidebar>
        </Section>
        <Section>
          <Title>Work Experience</Title>
          <Jobs>
            {displayJobs.map((job) => (
              <Job
                key={job.id}
                title={job.title}
                company={job.company}
                place={job.place}
                from={job.from}
                to={job.to}
              >
                <List>
                  {job.tasks.map((task, index) => (
                    <li key={`task-${index}`}>{task}</li>
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
    </>
  );
};

export default About;

const Section = styled.section`
  margin: 2rem 0;

  @media print {
    border-bottom: 1pt solid #000;
    line-height: 1;
  }
`;

const WithSidebar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  main {
    width: 70%;
    min-width: 280px;
    flex-grow: 1;
  }

  aside {
    width: 30%;
    min-width: 280px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
      }
    }

    h2:first-of-type {
      margin: 0 0.5rem 1rem 0;
      display: inline-block;
      font-size: 1em;
    }
  }
`;

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
`;

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media print {
    font-size: 22pt;
  }
`;
const JobTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0;

  @media print {
    font-size: 16pt;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;

  @media print {
    margin-top: 5pt;
    font-size: 11pt;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;

  @media print {
    font-size: 22pt;
  }
`;

const Jobs = styled.div`
  @media print {
    column-count: 2;
  }
`;

const List = styled.ul`
  padding: 0 1rem;
  margin: 0;
  list-style: square;
`;

// const PrintOnly = styled.div`
//   display: none;
//   @media print {
//     display: unset;
//   }
// `;

const ScreenOnly = styled.div`
  @media print {
    display: none;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin: 0 auto;
  color: ${getTextColor};

  @media print {
    display: none;
  }
`;
