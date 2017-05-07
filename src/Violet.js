import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { compose, withState } from 'recompose';
import { Helmet } from 'react-helmet';

const apiHost = process.env.NODE_ENV === 'production' ?
  'http://violetfunparkparty.com:5000' :
  'http://localhost:5000';

function handleSubmit(evt, email){
  evt.preventDefault();

  console.log(`${name} has RSVP'd.`);

  return fetch(`${apiHost}/rsvp`, {
    method: `post`,
    mode: `cors`,
    headers: {
      'Content-Type': `application/json`,
      'Accept': `application/json`,
    },
    body: JSON.stringify({email}),
  });
}

const enhance = compose(
  withState('disabled', 'setDisabled', false),
  withState('hasSent', 'setHasSent', false),
  withState('email', 'setEmail', ''),
);

const Violet = enhance(({ 
  disabled, 
  setDisabled, 
  hasSent, 
  setHasSent,
  email,
  setEmail, 
}) => {
  return (
    <PageWrapper>
      <Helmet>
          <title>Violet's Fun-Raising Neighborhood Party</title>
      </Helmet>  
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Logo>
          <LeftBirds high />   
          <LeftBirds />
          <img src="/logo--park-party.png" alt="Party in the Park" />          
          <RightBirds />   
          <RightBirds high />   
        </Logo>
        <ContentDescription 
          size={30}
          margin="1vw 0 0 0">
          Meet your neighbors while benefiting
        </ContentDescription>
        <Benefits>
          <img src="/benefit--tree-frog-treks.png" alt="Benefitting Tree Frog Treks" />
        </Benefits>
        <ContentBox>
          <ContentHeader>Violet's Fun Raiser</ContentHeader>
          <ContentDate>June 11th @ 11am</ContentDate>
          <ContentDescription>
            Cayuga Playground, Outer Mission<br />
            301 Naglee Ave, San Francisco, CA 94112
          </ContentDescription>
          <form onSubmit={evt => {
            handleSubmit(evt, email);
            setHasSent(true);
          }}>
            <RsvpWrapper>     
            {hasSent && (
              <Thanks>Thanks!</Thanks>
            )}
            {!hasSent && (
              <span style={{display: 'flex'}}>
                <input 
                  type="email" 
                  name="email"
                  autoComplete="email"
                  onChange={evt => setEmail(evt.target.value)} 
                  placeholder="What's your email?" 
                />
                <input type="submit" value="RSVP" />
              </span>
            )}                 
            </RsvpWrapper>
          </form>
        </ContentBox>
        <FunFeatures>
          <FunFeature color="#f04c23">Free Yoga Class</FunFeature>
          <FunFeature color="#3b55a5">Free Salsa Class</FunFeature>
          <FunFeature color="#61c5b8">Bouncy House</FunFeature>
          <FunFeature color="#f04c23">Face Painting</FunFeature>
          <FunFeature color="#3b55a5">Food & Drinks</FunFeature>
        </FunFeatures>
        <Notes>
          <Thumbtack>
            <img alt="" src="/thumbtack.svg" />
          </Thumbtack>
          <p>Join us at Cayuga Playground for a fun afternoon in the park with your community. We will have free activities for the whole family! There will be a bouncy house, yoga classes, salsa dancing, face painting, cotton candy, popcorn machines, and games for everyone.</p>
          <p>There will be raffles for a chance to win fun prizes and a trip to summer camp!</p>
          <p>This event is being hosted as a way to have fun while raising funds to send local kids to an overnight summer camp trip through Tree Frog Treks' award-winning camp programs. Summer Camp tuition is $475 per child and we would like to raise enough money to send at least 10 kiddos to camp this summer!</p>
          <p>Food and beverages will be available for purchase and 100% of the proceeds will be donated to helping kids go to camp.</p>
          <p>Please RSVP. We hope to see you there!</p>
        </Notes>
        <Notes>
          <Thumbtack>
            <img alt="" src="/thumbtack.svg" />
          </Thumbtack>
          Contact Violet Sinclaire at <a href="tel:415-713-9420">415-713-9420</a> or email <a href="mailto:violet.sinclaire@gmail.com">violet.sinclaire@gmail.com</a> for more information, or if you are interested in either donating or volunteering at the event.
        </Notes>
        <Notes>
          <Thumbtack>
            <img alt="" src="/thumbtack.svg" />
          </Thumbtack>
          <p>Campers will meet live animals, perform fun experiments, and build leadership and critical thinking skills through adventure in nature with peers and instructors. Campers will be given the opportunity to go to Point Reyes Sky Camp this summer for a 2-night trip. Tree Frog Treks will provide transportation to and from the Point Reyes campsite from their office in Hayes Valley.</p>
          <p>Visit <a href="http://www.treefrogtreks.com/">http://www.treefrogtreks.com/</a> to learn more about their award-winning programs and what our little campers will do this summer!.</p>
        </Notes>
      </div>
    </PageWrapper>
  );
});

const Thumbtack = styled.span`
  img {
    width: 40px;
    position: absolute;
    top: 0;
    left: -10px;    
  }
`;

const Notes = styled.div`
  position: relative;
  color: #546063;
  transform: rotate(-1deg);
  font-family: 'komika_axisregular';
  box-shadow: 1px 3px 3px 3px rgba(0,0,0,0.4);
  width: 60%;
  background: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 100;
  padding: 15px 30px;
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 12px;

  a {
    color: blue;
  }

  a:visited {
    color: blue;
  }
`;

const media = {
  bravo: (...args) => css`
    @media (max-width: 540px) {
      ${ css(...args) }
    }
  `
};

const FlyBirdyFlyLow = keyframes`
  to {
    opacity: 0;
    transform: translate(-500px, 120px) scale(0.5, -0.2);
  }
`;

const FlyBirdyFlyHigh = keyframes`
  to {
    opacity: 0;
    transform: translate(-500px, -20px) scale(0.5, -0.3);
  }
`;

const FlyBirdyFlyRight = keyframes`
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(500px, 130px) scale(0.5, -0.2);
  }
`;

const FlyBirdyFlyRightHigh = keyframes`
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(500px, -120px) scale(0.5, -0.2);
  }
`;

const ThanksPulse = keyframes`
  to {
    transform: scale(1.2) rotate(6deg);
    text-shadow:
       -4px -4px 0 #fae714,  
        4px -4px 0 #fae714,
        -4px 4px 0 #fae714,
         4px 4px 0 #fae714;
  }
`;

const Thanks = styled.div`
  font-family: 'komika_axisregular';
  font-size: 22px;  
  animation: ${ThanksPulse} 0.8s cubic-bezier(0.420, 0.000, 1.000, 1.000) infinite;
  animation-direction: alternate;
  transform: rotate(-6deg);

  color: #fff;
  text-shadow:
     -2px -2px 0 #f04c23,  
      2px -2px 0 #f04c23,
      -2px 2px 0 #f04c23,
       2px 2px 0 #f04c23;
`;

const PageWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #B3E5FC url(/bg--park-and-sky.png) no-repeat center center fixed;
  background-size: cover;
  overflow: auto;
  padding-bottom: 200px;
`;

const Logo = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  position: relative;

  img {
    height: 170px;
    z-index: 10;
  }
`;

const ContentBox = styled.section`
  background: linear-gradient(-9deg, #f7ec1e 0,#ed1f24 100%);
  box-shadow: 5px 5px 27px 3px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  transform: rotate(-1deg);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 50px;
  margin: 20px 5vw;
  min-height: 20vh;

  ${ media.bravo`
    margin: 20px 0;
    padding: 10px 10px;
  ` }
`;

const LeftBirds = styled.div`
  width: 350px;
  min-height: 150px;
  background-image: url(/left-birds.png);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  position: absolute;
  transform: translate(90px, 20px) ${props => props.high ? 'scale(1)' : 'scale(0.8)'};
  animation: ${props => props.high ? FlyBirdyFlyHigh : FlyBirdyFlyLow} 4s cubic-bezier(0.420, 0.000, 1.000, 1.000) infinite;
  animation-delay: ${props => props.high ? 1 : 2}s;
  animation-iteration-count: infinite;
`;

const RightBirds = styled.div`
  width: 350px;
  min-height: 150px;
  background-image: url(/right-birds.png);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  position: absolute;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: translate(90px, 10px) ${props => props.high ? 'scale(1)' : 'scale(0.8)'};
  animation: ${props => props.high ? FlyBirdyFlyRightHigh : FlyBirdyFlyRight} 3.5s cubic-bezier(0.420, 0.000, 1.000, 1.000) infinite;
  animation-delay: ${props => props.high ? 0.5 : 1.5}s;
  animation-iteration-count: infinite;
`;

const FunFeature = styled.li`
  color: ${props => props.color || '#fff'};
  text-shadow:
     -2px -2px 0 #fff,  
      2px -2px 0 #fff,
      -2px 2px 0 #fff,
       2px 2px 0 #fff;

  ${ media.bravo`
    white-space: nowrap;
    text-align: center;
  ` }
`;

const FunFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  font-family: 'komika_axisregular';
  font-size: 22px;  
  margin: 10px 0 0 0;
  display: flex;
  width: 550px;
  flex-wrap: wrap;
  justify-content: center;

  li {
    width: 50%;
    text-align: center;

    ${ media.bravo`
      width: auto;
    ` }
  }

  ${ media.bravo`
    flex-wrap: nowrap;
    flex-direction: column;
    width: auto;
  ` }
`;

const ContentHeader = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 #cd371e;
  font-family: 'komika_axisregular';
  font-size: 35px;
  font-weight: normal;
  margin: 0;

  ${ media.bravo`
    font-size: 5vw;
  ` }
`;

const ContentDate = styled.h2`
  color: #489643;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 #fff;
  font-family: 'komika_axisregular';
  font-size: 35px;
  font-weight: normal;
  margin: -10px 0 0 0;

  ${ media.bravo`
    font-size: 5vw;
    text-shadow: 1.5px 1.5px 0 rgba(255, 255, 255, 0.8);
    margin-top: 0;
  ` }
`;

const ContentDescription = styled.h2`
  color: #fae714;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px #000;
  font-family: 'komika_axisregular';
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: ${props => props.size || '17px'};
  font-weight: normal;
  margin: ${props => props.margin || '1vh 0 3vh 0'};

  ${ media.bravo`
    font-size: 3vw;
  ` }
`;

const RsvpWrapper = styled.div`
  margin: 0 0 30px 0;
  display: flex;  
  position: relative;  

  input[type="submit"] {
    display: flex;
    background: #f26222;
    color: #fff;
    font-family: 'komika_axisregular';
    font-size: 13px;
    font-weight: 100px;
    border: 3px solid #fff;
    border-radius: 0 4px 4px 0;
    border-width: 1px 1px 1px 0;    
    margin: 0 0 0 -5px;
  }

  input[type="email"] {
    font-family: 'komika_axisregular';
    font-size: 13px;
    border: 3px solid #fff;
    border-radius: 4px;
    color: #3c3c3c;
    outline: none;
    padding: 0 2px;

    ${ media.bravo`
      font-size: 10px;
    ` }
  }
`;

const Benefits = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -10px 0 -25px 0;

  img {
    width: 250px;
  }
`;

export default Violet;
