import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const About = () => {
  const experiences = [
    {
      role: "Graduate Teaching Assistant - Fundamentals of Internet of Things",
      company: "Northeastern University",
      location: "Boston, MA",
      period: "Jan. 2024 - April 2024",
      details: [
        "Led lab sessions on IoT protocols, networking, and system performance monitoring",
        "Enhanced student understanding of MQTT, CoAP, and TCP/IP communication",
        "Provided hands-on guidance for practical IoT technology implementations"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Schneider Electric",
      location: "Andover, MA",
      period: "May. 2024 - Aug. 2024",
      details: [
        "Benchmarked open-source time series ML libraries (SKTime, SKForecast) against SE proprietary tools",
        "Developed Python framework for backtesting and cross-validation",
        "Researched and developed CI/CD pipelines for model versioning and automated deployment"
      ]
    },
    {
      role: "Cyber Security Analyst",
      company: "Deloitte",
      location: "Bengaluru, India",
      period: "Jun. 2022 - Aug. 2023",
      details: [
        "Performed application security testing aligned with OWASP Top 10",
        "Monitored threats using SIEM tools (Chronicle, Splunk) and EDR solutions",
        "Conducted threat hunting using MITRE ATT&CK framework",
        "Managed vulnerabilities using Qualys and Prisma Cloud",
        "Led security risk assessments for GDPR, SOC2, and ISO compliance",
        "Executed IAM workflows in Saviynt for access governance"
      ]
    }
  ];
  const education = [
    {
      school: "Northeastern University",
      location: "Boston, MA",
      degree: "Master of Science in Cyber Physical Systems - Internet of Things",
      period: "Sep. 2023 - May. 2025",
      gpa: "4.00",
      details: [
        "Focus Area: Software Engineering, Data Networking, IoT Systems, ML Ops, Networking Security, IoT Embedded System Design, Object-Oriented Design, Connected Devices"
      ]
    },
    {
      school: "PES University",
      location: "Bengaluru, India",
      degree: "Bachelor of Technology in Electronics and Communication; Minor in Computer Science",
      period: "Aug. 2018 - May. 2022",
      details: [
        "Relevant Coursework: Data Structures, Algorithms, Computer Networks, DBMS, Operating Systems"
      ]
    }
  ];
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, px: 4, maxWidth: '1000px', margin: '0 auto' }}>
        {/* About Me Section */}
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
          <span style={{ color: '#64ffda' }}>01.</span> About Me
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 6, 
          mb: 12,
          alignItems: 'flex-start',
          position: 'relative'
        }}>
          <Box sx={{ 
            flex: 1,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              left: -20,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }
          }}>
            <Typography 
              sx={{ 
                color: '#8892b0',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 4,
                position: 'relative',
                zIndex: 1
              }}
            >
              Experienced Cyber Security Analyst with expertise in IoT systems and network security. 
              Currently pursuing a Master's in Cyber Physical Systems at Northeastern University, 
              focusing on secure IoT implementations and advanced networking protocols.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <IconButton 
                sx={{ 
                  color: '#64ffda',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                <SecurityIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#64ffda',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                <StorageIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#64ffda',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                <SchoolIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ 
            position: 'relative',
            width: { xs: '70%', md: '300px' },
            alignSelf: { xs: 'center', md: 'flex-start' }
          }}>
            <Box
              component="img"
              src={process.env.PUBLIC_URL + '/images/Picture1.png'}
              alt="Profile"
              sx={{
                width: '100%',
                borderRadius: '4px',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease',
                filter: 'grayscale(100%)',
                '&:hover': {
                  transform: 'translate(-5px, -5px)',
                  filter: 'none'
                },
                '&:hover + .img-border': {
                  transform: 'translate(8px, 8px)'
                }
              }}
            />
            <Box
              className="img-border"
              sx={{
                position: 'absolute',
                top: 15,
                left: 15,
                right: -15,
                bottom: -15,
                border: '2px solid #64ffda',
                borderRadius: '4px',
                zIndex: 0,
                transition: 'transform 0.3s ease'
              }}
            />
          </Box>
        </Box>

        {/* Experience Section */}
        <Box ref={ref}>
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
            <WorkIcon sx={{ color: '#64ffda' }} />
            <span style={{ color: '#64ffda' }}>02.</span> Where I've Worked
          </Typography>

          <Stack spacing={4}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ 
                  borderLeft: '2px solid #64ffda',
                  pl: 3,
                  py: 2,
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'rgba(100, 255, 218, 0.05)',
                    transform: 'translateX(10px)'
                  },
                  transition: 'all 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: -6,
                    top: 0,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#64ffda'
                  }
                }}>
                  <Typography variant="h6" sx={{ color: '#ccd6f6', mb: 1 }}>
                    {exp.role}
                    <Typography component="span" sx={{ color: '#64ffda' }}>
                      &nbsp;@ {exp.company}
                    </Typography>
                  </Typography>
                  
                  <Typography sx={{ color: '#8892b0', mb: 2, fontSize: '0.9rem' }}>
                    {exp.period} | {exp.location}
                  </Typography>

                  <Stack spacing={1}>
                    {exp.details.map((detail, i) => (
                      <Typography
                        key={i}
                        sx={{
                          color: '#8892b0',
                          display: 'flex',
                          alignItems: 'flex-start',
                          fontSize: '0.95rem',
                          '&::before': {
                            content: '"▹"',
                            color: '#64ffda',
                            mr: 2,
                            mt: '4px'
                          }
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
        {/* Education Section */}
        <Box>
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
            <SchoolIcon sx={{ color: '#64ffda' }} />
            <span style={{ color: '#64ffda' }}>03.</span> Education
          </Typography>

          <Stack spacing={4}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ 
                  borderLeft: '2px solid #64ffda',
                  pl: 3,
                  py: 2,
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'rgba(100, 255, 218, 0.05)',
                    transform: 'translateX(10px)'
                  },
                  transition: 'all 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: -6,
                    top: 0,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#64ffda'
                  }
                }}>
                    <Typography variant="h6" sx={{ color: '#ccd6f6', mb: 1 }}>
                    {edu.school}
                    <Typography component="span" sx={{ color: '#64ffda' }}>
                      &nbsp;| {edu.location}
                    </Typography>
                  </Typography>
                  
                  <Typography sx={{ color: '#8892b0', mb: 1, fontSize: '1rem' }}>
                    {edu.degree}
                  </Typography>

                  <Typography sx={{ color: '#8892b0', mb: 2, fontSize: '0.9rem' }}>
                    {edu.period} {edu.gpa && ` | GPA: ${edu.gpa}`}
                  </Typography>

                  <Stack spacing={1}>
                    {edu.details.map((detail, i) => (
                      <Typography
                        key={i}
                        sx={{
                          color: '#8892b0',
                          display: 'flex',
                          alignItems: 'flex-start',
                          fontSize: '0.95rem',
                          '&::before': {
                            content: '"▹"',
                            color: '#64ffda',
                            mr: 2,
                            mt: '4px'
                          }
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
};

export default About;