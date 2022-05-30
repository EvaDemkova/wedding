import React, { useRef, useState } from 'react';
import styles from '../../styles/components/Navbar.module.scss';
import data from '../../common/data.json';
import LinkBtn from '../linkBtn';
import useWindowSize from '../../hooks/useWindowSize';
import useMobileLayout from '../../hooks/useMobileLayout';
import SvgClose from '../svgComponents/svgClose.js';
import SvgMenu from '../svgComponents/svgMenu.js';
import Stack from '@mui/material/Stack';
import Link from 'next/dist/client/link';

export default function Navbar() {
  const [active, setActive] = useState(true);
  const navBreakpoint = 1070;
  const windowSize = useWindowSize();
  const isMobile = useMobileLayout(windowSize, navBreakpoint);

  if (!isMobile) {
    return (
      <div className={styles.navbar}>
        {data.navbar.map((link, _i) => {
          return <LinkBtn key={_i} path={link.path} btnText={link.title} />;
        })}
      </div>
    );
  } else {
    return (
      <>
        <Stack
          direction='column'
          className={styles.mobile}
          justifyContent='center'
          sx={{
            position: `${active ? 'relative' : 'fixed'}`,
            background: `${
              active
                ? 'none'
                : 'linear-gradient(to right, #E4E3DE, #DBDAD5, #D3D2CD, #CFCEC9, #CCCBC6, #C9CAC4 , #C5C7C4)'
            }`,
          }}
        >
          <Stack
            direction='row'
            spacing={{ xs: 3, md: 15, lg: 30 }}
            sx={{
              mx: '5%',
            }}
            justifyContent='flex-end'
            alignItems='center'
          >
            <SvgClose active={!active} setActive={setActive} />
            <SvgMenu active={active} setActive={setActive} />
          </Stack>
          <Stack
            sx={{
              display: `${active ? 'none' : 'flex'}`,
              height: `${active ? '0' : 'calc(100vh - 79px)'}`,
              overflow: "auto"
            }}
            direction='column'
            spacing={{ xs: 3 }}
            // justifyContent="space-evenly"
            alignItems='center'
            className={styles.menu}
          >
            {data.navbar.map((link, _i) => {
              return (
                <Link key={_i} href={link.path} onClick={() => setActive(true)}>
                  <h1
                    className={`${styles.mobileLink}`}
                    onClick={() => setActive(true)}
                  >
                    {link.title}
                  </h1>
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </>
    );
  }
}
