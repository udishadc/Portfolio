import React from 'react';
import { Box, Typography, Paper, Stack, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';

interface ExperienceProps {
  isVisible: boolean;
  onClose: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ isVisible, onClose }) => {
  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "Northeastern University",
      location: "Boston, MA",
      period: "Jan. 2024 - April 2024",
      description: "Led lab sessions on IoT protocols, networking, and system performance monitoring, covering MQTT, CoAP, and TCP/IP communication, which enhanced students' understanding and practical skills in IoT technologies."
    },
    {
      title: "Data Science Intern",
      company: "Schneider Electric",
      location: "Andover, MA",
      period: "May. 2024 - Aug. 2024",
      description: [
        "Benchmarked open-source time series ML libraries (SKTime, SKForecast) against SE proprietary tools",
        "Developed a Python framework for backtesting and cross-validation",
        "Researched and developed CI/CD pipelines for model versioning and automated deployment"
      ]
    },
    {
      title: "Cyber Security Analyst",
      company: "Deloitte",
      location: "Bengaluru, India",
      period: "Jun. 2022 - Aug. 2023",
      description: [
        "Performed application security testing aligned with OWASP Top 10",
        "Monitored and responded to real-time threats using SIEM tools",
        "Conducted proactive threat hunting using the MITRE ATT&CK framework",
        "Managed cloud and on-prem vulnerabilities using Qualys and Prisma Cloud"
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <Modal
          open={isVisible}
          onClose={onClose}
          sx={{
            overflow: 'auto',
            width: '100vw',
            height: '100vh',
            bgcolor: '#0a192f'
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                minHeight: '100vh',
                width: '100%',
                p: { xs: 2, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#0a192f',
                position: 'relative'
              }}
            >
              <IconButton
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  color: '#64ffda',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <HomeIcon fontSize="large" />
              </IconButton>

              <Paper 
                elevation={3} 
                sx={{ 
                  p: 6,
                  width: '100%',
                  maxWidth: 1200,
                  bgcolor: '#112240',
                  transition: 'transform 0.3s',
                }}
              >
                <Typography 
                  variant="h3" 
                  gutterBottom 
                  sx={{ 
                    color: '#64ffda',
                    mb: 6 
                  }}
                >
                  Experience
                </Typography>

                <Stack spacing={4}>
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Paper 
                        elevation={2}
                        sx={{ 
                          p: 3, 
                          bgcolor: '#1a2f4e',
                          '&:hover': { transform: 'translateY(-4px)' },
                          transition: 'transform 0.3s'
                        }}
                      >
                        <Typography variant="h5" sx={{ color: '#ccd6f6', mb: 1 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#64ffda', mb: 2 }}>
                          {exp.company} • {exp.location}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#8892b0', mb: 2 }}>
                          {exp.period}
                        </Typography>
                        {Array.isArray(exp.description) ? (
                          <Stack spacing={1}>
                            {exp.description.map((desc, i) => (
                              <Typography key={i} variant="body1" sx={{ color: '#8892b0' }}>
                                • {desc}
                              </Typography>
                            ))}
                          </Stack>
                        ) : (
                          <Typography variant="body1" sx={{ color: '#8892b0' }}>
                            {exp.description}
                          </Typography>
                        )}
                      </Paper>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>
            </Box>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default Experience;