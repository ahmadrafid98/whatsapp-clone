import { Circle } from "better-react-spinkit";
import styled from "styled-components";
import Logo from "../components/Logo";

const Container = {
  display: "grid",
  placeItems: "center",
  height: "100vh",
};

const LoadingContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function Loading() {
  return (
    <div style={Container}>
      <div style={LoadingContainer}>
        <Logo />
        <Circle color="#3CBC28" size={60} />
      </div>
    </div>
  );
}

export default Loading;
