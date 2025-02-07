import React from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import './Header.css';

import { HStack, Flex, Icon,Divider } from '@chakra-ui/react'
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import './Home.css'

const Header = () => {
  return (
    <div>
        <Box minwidth={'100vw'} h={'4vh'} backgroundColor={'#222222'}  >
            <HStack  alignItems={'center'}>



                <Text   ml={25} mr={30} color={'white'}>
                    Contact us:
                </Text>

                <FiPhoneCall  size={20} color="#FAB519" style={{ marginRight: '4px' ,paddingTop:'9px'}} />

                <Text    mr={30} color={'white'}>
                    +91xxxxxxxx
                </Text>


                

                <HiOutlineMail  size={20}  color="#FAB519" style={{ marginRight: '4px' ,paddingTop:'8px'}} />

                <Text   mr={30} color={'white'}>
                    xyz@gmail.com
                </Text>


                <Text   ml={1100}  color={'white'}>
                <a href='/login' style={{ textDecoration:'none',color:'white'}}>Log in</a>
                </Text>

                <Box
        mx={2}
        h="20px"
        w="2px"
        backgroundColor="#FAB519"
      />
                <Text    mr={30} color={'white'}>
                <a href='/register' style={{ textDecoration:'none',color:'white'}}>Register</a>
                </Text>



                


            </HStack>




            


        </Box>


        <Box w={'100vw'} h={'6vh'} backgroundColor={'white'} mt={15} mb={40} >
            <HStack ml={'37vw'}>
                <a href='/'  style={{marginRight:'3%', textDecoration:'none',color:'Black'}}>Home</a>
                <a href='/about' style={{marginRight:'3%', textDecoration:'none',color:'Black'}}>About</a>
                <a href='/history-2011' style={{marginRight:'3%', textDecoration:'none',color:'Black'}}>Take Test</a>
                <a href='/'style={{marginRight:'3%', textDecoration:'none',color:'Black'}}>Blog</a>
                <a href='/contact  'style={{marginRight:'3%', textDecoration:'none',color:'Black'}}>Contact</a>
                <SearchIcon color="Black" />


            </HStack>




        </Box>







        
      
    </div>
  )
}

export default Header
