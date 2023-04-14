import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Span>Hello, I'm Jacob Ojijo</Span><br/>Welcome To <br/>
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a Software Developer with hands on experience in developing efficient and scalable applications with user friendly interface. I'm also well versed in Cloud and Artificial Intelligence/Machine Learning 
        </SectionText>
        <Button onClick={props.handleClick}><a href='mailto:jacobojijo.work@gm'>Learn More</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;