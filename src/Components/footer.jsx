import React from 'react'
import './footer.css';
import { Box, background, position } from '@chakra-ui/react';
import { HStack, Flex, Icon,Divider,Button,Heading,VStack,Text } from '@chakra-ui/react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGlobe } from 'react-icons/fa';
import img11 from '../image 12.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
const footer = () => {
  return (
    <div>
        
        <Box className={'fend'} width={"100%"}>
            <Box margin={'auto'} width={'60vw'} height={'35vh'}>
            <Flex direction={['column','column','row','row']}>
            <Box width={['60vw','60vw','80vw','11vw']} >
                <VStack>
                    <Text style={{fontSize:'1.4rem'}}>Useful Links</Text>
                    <div className="thin-yellow-line"></div>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>Home</Text>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>About</Text>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>Take Test</Text>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>Blogs</Text>

                
                </VStack>

            </Box>

            <Box width={['60vw','60vw','80vw','11vw']} marginLeft={['none','none','5vw','5vw']}>
                <VStack>
                    <Text style={{fontSize:'1.4rem',fontWeight:'550'}}>Our Courses</Text>
                    <div className="thin-yellow-line"></div>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>Science</Text>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>History</Text>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>Political</Text>
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>English</Text>

                
                </VStack>

            </Box>

            <Box width={['60vw','60vw','80vw','11vw']} marginLeft={['none','none','5vw','5vw']} >
                <VStack>
                    <Text style={{fontSize:'1.4rem'}}>Contact Us</Text>
                    <div className="thin-yellow-line"></div>
                    <Flex>
                    <FiPhoneCall  size={30} color="#FAB519" style={{ marginRight: '4px' ,paddingTop:'9px'}} />
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>+91xxxxxxxx,
                    <br/>
                    +9123xxxxxx
                    </Text>
                    </Flex>
                    <Flex>
                    <HiOutlineMail  size={30} color="#FAB519" style={{ marginRight: '4px' ,paddingTop:'9px'}} />
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>info@gmail.com
                    </Text>
                    </Flex>
                    <Flex>
                    <FaGlobe  size={30} color="#FAB519" style={{ marginRight: '4px' ,paddingTop:'9px'}} />
                    <Text fontSize={'1rem'} color={'rgba(0,0,0,0.7)'}>www.website.com
                    </Text>

                    
                    </Flex>
                    

                
                </VStack>

            </Box>

            <Box width={['60vw','60vw','80vw','11vw']} marginLeft={['none','none','5vw','5vw']}>
                <VStack>
                    <img src={img11}></img>
                    <Flex>
                    <FaMapMarkerAlt size={60} color="#FAB519" style={{ marginRight: '4px' ,paddingTop:'9px'}} />
                    <Text fontSize={'1rem'} >inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</Text>

                    </Flex>
                    
                    <div className="social-icons">
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
        <FaFacebook className="icon" />
        <FaYoutube className="icon" />
      </div>

                
                </VStack>

            </Box>
        </Flex>

            </Box>
        

        </Box>

        


    </div>
    
  )
}

export default footer