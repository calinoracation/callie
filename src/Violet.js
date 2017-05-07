import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { compose, withState } from 'recompose';
import { Helmet } from 'react-helmet';

// const apiHost = process.env.NODE_ENV === 'production' ?
//   'http://violetfunparkparty.com:5000' :
//   'http://localhost:5000';

// function handleSubmit(event, name, email, phone){
//   evt.preventDefault();

//   console.log(`${name} has RSVP'd. Send an email to ${email} or call @ ${phone}.`);

//   return fetch(`${apiHost}/rsvp`, {
//     method: `post`,
//     mode: `cors`,
//     headers: {
//       'Content-Type': `application/json`,
//       'Accept': `application/json`,
//     },
//     body: JSON.stringify({name, email, phone}),
//   });
// }

const enhance = compose(
  withState('disabled', 'setDisabled', false),
  withState('hasSent', 'setHasSent', false),
);

const Violet = enhance(({ disabled, setDisabled }) => {
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
            301 Naglee Ave, San Francisco 94112
          </ContentDescription>
          <RsvpWrapper>
            <input type="text" placeholder="What's your email?" />
            <input type="submit" value="RSVP" />
          </RsvpWrapper>
        </ContentBox>
        <FunFeatures>
          <FunFeature color="#f04c23">Free Yoga Class</FunFeature>
          <FunFeature color="#3b55a5">Free Salsa Class</FunFeature>
          <FunFeature color="#61c5b8">Free Bouncy House</FunFeature>
          <FunFeature color="#f04c23">Face Painting</FunFeature>
          <FunFeature color="#3b55a5">Food & Drinks</FunFeature>
        </FunFeatures>
      </div>
      <Thanks>
        <div className="thanks">
          <h2>Thank you for RSVP'ing, see you on June 11th! <br />Please check your email for any changes or updates</h2>
          <button className="btn--dismiss" onClick={() => setDisabled(true)}>Close</button>
        </div>
      </Thanks>
    </PageWrapper>
  );
});

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
    transform: translate(-220px, 120px) scale(0.5, -0.2);
  }
`;

const FlyBirdyFlyHigh = keyframes`
  to {
    opacity: 0;
    transform: translate(-220px, -20px) scale(0.5, -0.5);
  }
`;

const FlyBirdyFlyRight = keyframes`
  to {
    opacity: 0;
    transform: translate(190px, 10px) scale(-1, -0.5);
  }
`;

const FlyBirdyFlyRightHigh = keyframes`
  to {
    opacity: 0;
    transform: translate(190px, -120px) scale(-1, -0.5);
  }
`;

const Thanks = styled.div`
  display: none;
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
    height: 25vh;
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
  animation-delay: ${props => props.high ? 0 : 2.3}s;
`;

const RightBirds = styled.div`
  width: 350px;
  min-height: 150px;
  background-image: url(/left-birds.png);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  position: absolute;
  transform: translate(-90px, 10px) ${props => props.high ? 'scaleX(-1)' : 'scaleX(-1)'};
  animation: ${props => props.high ? FlyBirdyFlyRightHigh : FlyBirdyFlyRight} 4s cubic-bezier(0.420, 0.000, 1.000, 1.000) infinite;
  animation-delay: ${props => props.high ? 0 : 2}s;
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
    font-size: 4vw;
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

  input[type="text"] {
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
