import type { GetStaticProps, NextPage } from 'next/types';

import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';
import { ReactElement, useEffect } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';

import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';

import prisma from '../lib/prisma';
import { propsToClassKey } from '@mui/styles';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

const fetchData = () => {
  fetch('./api/users')
    .then((data)=>{return data.json()})
    .then((data)=>{console.log(data)})
    .catch((error)=> {console.log(error)});
}

function Overview() {

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <OverviewWrapper>
      <Head>
        <title>SZ</title>
      </Head>
      {/* <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/dashboards/tasks"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Live Preview
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper> */}
      <Hero />
      {/* <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography textAlign="center" variant="subtitle1">
          Crafted by{' '}
          <Link
            href="https://bloomui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            BloomUI.com
          </Link>
        </Typography>
      </Container> */}
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
