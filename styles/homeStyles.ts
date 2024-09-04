import styled from 'styled-components';

export const HomeBackground = styled.div`
    display: flex;
    flex-direction: column;
    background-image: #EAEAEA;
    background-size: 110% 110% ;
    background-position: left center;
    margin: 0px;
    min-height: 100vh;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', sans-serif;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const Nav = styled.nav`

`;

export const NavLink = styled.a`
    color: #636363;
    text-decoration: none;
    margin: 0px 15px;
    font-size: 32px;
`;

export const HeaderTitle = styled.h1`
    display: flex;
    flex-direction: column;
    margin: 0px;
    color: #636363;
    font-size: 32px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const Description = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export const SectionTitle = styled.h2`
    color: #000;
    font-size: 54px;
    margin-bottom: 20px;
`;

export const Paragraph = styled.p`
    line-height: 1.6;
    font-size: 24px;
`;

export const Image = styled.div`
    width: 360px;
    height: 360px;
    place-content: center;
    background: url(profile.jpg);
    border-radius: 50%;
`;

export const indexReportHeader = styled.div`
    padding: 0.3%;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(231, 231, 231, 0.40) 90%);
    margin-left: 0.7%;
    margin-right: 0.7%;
    height: auto;
    gap: 10px;
    height: 70vh;
`;