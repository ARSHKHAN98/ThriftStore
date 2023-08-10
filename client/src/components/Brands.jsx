import styled from "styled-components";
import { mobile } from "../responsive";
import logos from "../Images/logoss.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
  margin-bottom: 40px;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  align-items: center;
  justify-content: center;
`;

const Brands = () => {
  return (
    <Container>
      <Link to={"/products"}>
        <ImgContainer>
          <Image src={logos} />
        </ImgContainer>
      </Link>
    </Container>
  );
};

export default Brands;
