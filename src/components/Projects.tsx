import React from 'react';
import { Box, Typography, Stack, Link, Chip, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
  const projects = [
    {
      title: "Cybersecurity Framework for Telehealth Services",
      description: "Designed and implemented a security architecture for a mid-sized healthcare provider's telehealth services, focusing on safeguarding sensitive health data. Developed a multi-layered defense strategy, incorporating network segmentation and secure protocols.",
      tech: ["Security Architecture", "Network Segmentation", "Healthcare Security", "HIPAA Compliance"],
      image: "/images/telehealth.png",
      github: "",
      live: ""
    },
    {
      title: "Heritage Asset Monitoring System",
      description: "Built a Linux-based IoT system to monitor temperature, humidity, and pressure, ensuring artifact preservation through real-time adjustments. Integrated cloud-based MQTT communication and a dashboard to trigger alerts and maintain optimal conditions.",
      tech: ["IoT", "MQTT", "Linux", "Real-time Monitoring", "Cloud Integration"],
      image: "/images/heritage.png",
      github: "https://github.com/yourusername/heritage-monitoring",
      live: ""
    },
    {
      title: "Smart Plant Monitoring System",
      description: "Developed an IoT-based plant care system using the Silicon Labs Nano Matter Board as the hub, integrating Matter protocol and Thread network for seamless communication.",
      tech: ["Matter Protocol", "Thread Network", "IoT", "Silicon Labs"],
      image: "/images/plant.png",
      github: "",
      live: "https://your-demo-link.com"
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
          <CodeIcon sx={{ color: '#64ffda' }} />
          <span style={{ color: '#64ffda' }}>04.</span> Some Things I've Built
        </Typography>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'rgba(17, 34, 64, 0.7)',
                  borderRadius: '4px',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'
                  },
                  transition: 'all 0.3s',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(100, 255, 218, 0.1)'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: '#8892b0', mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ my: 2 }}>
                    {project.tech.map((tech, i) => (
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
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  {project.github && (
                    <Link 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#ccd6f6',
                        '&:hover': { color: '#64ffda' }
                      }}
                    >
                      <GitHubIcon />
                    </Link>
                  )}
                  {project.live && (
                    <Link 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#ccd6f6',
                        '&:hover': { color: '#64ffda' }
                      }}
                    >
                      <OpenInNewIcon />
                    </Link>
                  )}
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Projects;