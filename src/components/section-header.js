import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="h2"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
            textAlign: 'center',
            fontFamily: "heading",
            fontWeight: '900',
            fontSize: ['23px', null, null, null, null, '30px', '36px'],
            lineHeight: [1.5, null, null, '1'],
            color: '#FFF',
            letterSpacing: ['-0.5px'],
            mb: ['0px', null, null, '15px'],
            width: ['70%', null, null, 'auto'],
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="p"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
          fontFamily: "body",
          textAlign: 'center',
          fontWeight: '900',
          fontSize: ['23px', null, null, null, null, '30px', '36px'],
          lineHeight: [1.5, null, null, '1'],
          color: '#FFF',
          letterSpacing: ['-0.5px'],
          width: ['70%', null, null, 'auto'],
          mb: ['0px', null, null, '55px'],
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
