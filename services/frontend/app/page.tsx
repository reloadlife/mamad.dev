'use client';

import { Box, Text } from '@mantine/core';

export default function Page() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'url(/bg.jpg) no-repeat center center fixed',
      }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #000000 0%, #000000 27.6%, rgba(0, 0, 0, 0) 100%);',
        }}
      >
        <Text<'h1'> component={'h1'} sx={{
          fontSize: 40,
          fontWeight: 400,
          color: 'white',
          
        }}>
          Mohammad Mahdi Afshar
        </Text>
        <Text<'h2'> component={'h2'} sx={{
          marginTop: 5,
          fontSize: 70,
          fontWeight: 400,
          color: '#D900FD',
        }}>
          Senior Software Engineer
        </Text>
      </Box>
    </Box>
  );
}
