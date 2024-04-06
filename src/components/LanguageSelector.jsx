import { Box, Text, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";



const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({language, onSelect}) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={1} fontSize="s">
        Language
      </Text>
      {/*  islazy This means that the content inside the Menu component will be rendered
      only when the Menu component itself becomes visible in the viewport. */}
      <Menu isLazy>
        <MenuButton
          as={Button}
          bg="#66ffdeb4"
          color="#ffffff"
          height="25px"
          fontSize="13px"
          mb={4}
        >
          {language}
        </MenuButton>
        <MenuList bg="#23272d" color="#ffffff">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              onClick={() => onSelect(lang)}
              bg={lang === language ? "blue.700" : "#23272d"}
              color={lang === language ? "blue.400" : "#ffffff"}
              _hover={{
                color: "blue.400",
              }}
            >
              {lang} &nbsp;
              <Text as="span" fontSize="s" color="#a0a0a0">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
