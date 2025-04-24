import React from 'react';
import { Box, Typography, Stack, Card, CardMedia, CardContent, Link, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Achievements = () => {
  const achievements = [
    {
      title: "Speaker at PyData NYC 2023",
      description: "Selected as a speaker at PyData NYC conference to present on advanced IoT security implementations and machine learning applications in cybersecurity.",
      tech: ["Python", "IoT Security", "Machine Learning", "Public Speaking"],
      images: [
        "/images/pydata.png",
        "/images/pydata2.png"
      ],
      conferenceLink: "https://pydata.org/nyc2023/presentations#365192",
      youtubeLink: "https://www.youtube.com/watch?v=ix8iTD5yQp0"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, px: 4, maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" sx={{ 
          color: '#ccd6f6', 
          mb: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          '&::before': {
            content: '""',
            display: 'block',
            width: '50px',
            height: '2px',
            backgroundColor: '#64ffda',
            marginRight: '20px'
          }
        }}>
          <EmojiEventsIcon sx={{ color: '#64ffda' }} />
          <span style={{ color: '#64ffda' }}>05.</span> Achievements
        </Typography>

        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              sx={{
                bgcolor: 'rgba(17, 34, 64, 0.7)',
                mb: 4,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'
                },
                transition: 'all 0.3s',
              }}
            >
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
                gap: 2, 
                p: 2 
              }}>
                {achievement.images.map((image, i) => (
                  <CardMedia
                    key={i}
                    component="img"
                    height="300"
                    image={process.env.PUBLIC_URL + image}
                    alt={`PyData NYC Presentation ${i + 1}`}
                    sx={{
                      borderRadius: '4px',
                      objectFit: 'cover',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s ease'
                      }
                    }}
                  />
                ))}
              </Box>
              <CardContent>
                <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2 }}>
                  {achievement.title}
                </Typography>
                <Typography sx={{ color: '#8892b0', mb: 3 }}>
                  {achievement.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                  {achievement.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      sx={{
                        bgcolor: 'rgba(100, 255, 218, 0.1)',
                        color: '#64ffda',
                        fontSize: '0.85rem',
                        my: 0.5
                      }}
                    />
                  ))}
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Link
                    href={achievement.conferenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#64ffda',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Conference Profile
                    <OpenInNewIcon sx={{ fontSize: '1rem' }} />
                  </Link>
                  <Link
                    href={achievement.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#ff0000',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Watch Talk
                    <YouTubeIcon sx={{ fontSize: '1.2rem' }} />
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default Achievements;