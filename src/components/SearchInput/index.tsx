import React from "react";
import {
  Container,
  Input,
  SearchIcon,
  Separator,
  SettingsIcon,
} from "./styles";

const SearchInput: React.FC = () => {
  return (
    <Container>
      <SearchIcon />
      <Input placeholder="Pesquise por empresa, título..." />
      <Separator />
      <SettingsIcon style={{ transform: [{ rotate: "90deg" }] }} />
    </Container>
  );
};

export default SearchInput;
