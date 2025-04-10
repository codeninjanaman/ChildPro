import  { useRef, useState, useEffect } from 'react';
import { Button, Typography, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import Banner from './Banner';
import Join from './Join';
import AboutUs from './AboutUs';
import Contact from './Contact';

import TwitterIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

const Startpage = () => {
  const homeRef = useRef(null);
  const joinRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [activeLink, setActiveLink] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (elementRef: any) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 80, // offset for fixed navbar
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', ref: homeRef },
    { name: 'Join', ref: joinRef },
    { name: 'About Us', ref: aboutRef },
    { name: 'Contact Us', ref: contactRef },
  ];

  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1000,
          backgroundColor: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1%',
          flexWrap: 'wrap',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px',
              backgroundColor: '#e0f7fa',
              borderRadius: '50%',
            }}
          >
            <Typography variant="h6" color="black">🧒</Typography>
          </div>
          <Typography variant="h6" fontWeight="bold">Childoo</Typography>
        </div>

        {/* Nav Links - Desktop */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '5%', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ position: 'relative', cursor: 'pointer' }}
                onClick={() => {
                  setActiveLink(item.name);
                  scrollToSection(item.ref);
                }}
              >
                <Typography style={{ fontWeight: activeLink === item.name ? 700 : 500 }}>
                  {item.name}
                </Typography>
                {activeLink === item.name && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      height: '3px',
                      background: '#5DDC7F',
                      borderRadius: '4px',
                      width: '60%',
                      position: 'absolute',
                      bottom: '-4px',
                      left: '20%',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <div>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        )}

        {/* Button Container - Desktop */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '8px', marginRight:'3%', flexShrink: 0 }}>
            {/* Join as Educator Button */}
            <Button
              variant="contained"
              sx={{
                borderRadius: '12px',
                textTransform: 'none',
                bgcolor: '#5DDC7F',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#4fc16d' },
              }}
            >
              Join as Educator
            </Button>

            {/* Login Button */}
            <Button
              variant="contained"
              onClick={()=>navigate('/login')}
              sx={{
                borderRadius: '12px',
                textTransform: 'none',
                bgcolor: '#5DDC7F',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#4fc16d' },
              }}
              endIcon={<span style={{ fontSize: '18px' }}>➡️</span>}
            >
              Login
            </Button>
          </div>
        )}

        {/* Drawer for Mobile */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div style={{ width: '250px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Typography
                onClick={() => {
                  setActiveLink(navItems[0].name);
                  scrollToSection(navItems[0].ref);
                  setDrawerOpen(false);
                }}
                style={{ cursor: 'pointer', fontWeight: activeLink === navItems[0].name ? 700 : 500 }}
              >
                {navItems[0].name}
              </Typography>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navItems.slice(1).map((item) => (
                <Typography
                  key={item.name}
                  onClick={() => {
                    setActiveLink(item.name);
                    scrollToSection(item.ref);
                    setDrawerOpen(false);
                  }}
                  style={{ cursor: 'pointer', fontWeight: activeLink === item.name ? 700 : 500 }}
                >
                  {item.name}
                </Typography>
              ))}
            </div>
            {/* Button Container - Mobile */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '8px',
                marginTop: isMobile ? '16px' : '0',
              }}
            >
              {/* Join as Educator Button */}
              <Button
                variant="contained"
                sx={{
                  borderRadius: '12px',
                  textTransform: 'none',
                  bgcolor: '#5DDC7F',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#4fc16d' },
                }}
              >
                Join as Educator
              </Button>

              {/* Login Button */}
              <Button
                variant="contained"
                sx={{
                  borderRadius: '12px',
                  textTransform: 'none',
                  bgcolor: '#5DDC7F',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#4fc16d' },
                }}
                endIcon={<span style={{ fontSize: '18px' }}>➡️</span>}
              >
                Login
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
        
      {/* Banner */}
      <div ref={homeRef}>
        <Banner />
      </div>

      {/* Join us */}
      <div ref={joinRef}>
        <Join />
      </div>

      {/* about us */}
      <div ref={aboutRef}>
        <AboutUs />
      </div>

      {/* Contact us */}
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* footer */}
      <div
        style={{
          backgroundColor: '#000',
          color: 'white',
          padding: '2rem',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '300px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* Left Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#000', fontWeight: 'bold' }}>🧒</span>
              </div>
              <span style={{ fontSize: '1rem' }}>Childoo</span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <TwitterIcon style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
              <FacebookIcon style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
              <InstagramIcon style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
            </div>
          </div>

          {/* Center Navigation */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '0 2rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(joinRef)}>Join as Educator</span>
            <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(aboutRef)}>About Us</span>
            <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(contactRef)}>Contact Us</span>
          </div>
        </div>

        {/* Bottom Text */}
        <div style={{ marginTop: '2rem' }}>
          <span>@childoo2024</span>
        </div>
      </div>
    </div>
  );
};

export default Startpage;