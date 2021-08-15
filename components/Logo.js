import styled from "styled-components";

const LogoImg = {
  height: "200px",
  width: "200px",
  marginBottom: "50px",
};

function Logo() {
  return (
    <img
      style={LogoImg}
      src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png"
    />
  );
}

export default Logo;
