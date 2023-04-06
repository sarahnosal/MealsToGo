import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.green};
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const [searchKeyWord, setSearchKeyword] = useState(keyword);
  const { keyword, search } = useContext(LocationContext);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyWord}
        onSubmitEditing={() => {
          search(searchKeyWord);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
