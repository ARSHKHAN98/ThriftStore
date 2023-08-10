import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping On Orders Over ₹500</Container>;
};

export default Announcement;
