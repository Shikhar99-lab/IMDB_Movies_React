import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";


const InitialContainer = styled.p`
  text-align: center;
  font-weight: bold;
  padding-bottom: 1.5em;
`;

const InitialMessage = ({ initial }) => {
  const initialContent = initial ? (
    <InitialContainer>Top 250 IMDB Movies</InitialContainer>
  ) : null;
  return <> {initialContent} </>;
};

const mapStateToProps = ({ search: { initial } }) => ({ initial });
export default connect(mapStateToProps)(InitialMessage);
