import React from 'react'
import img9 from './about-thumbnail.5b39fc29b2d94540d419.jpg'


import { Box, background, position ,button} from '@chakra-ui/react'
import { Text , Image} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import img10 from './download (1).png'
import img11 from './5-Benefits-of-Personalized-Learning.png'
import img12 from './images.png'
import img13 from './download.png'
import img14 from './png-transparent-learning-object-open-educational-resources-learning-text-material-collaboration-thumbnail.png'
import img15 from './v1.1-React-Testing-Library-wait-for_1144x900.webp'

import { HStack, Flex, Icon,Divider,Button,Heading,VStack , Stack} from '@chakra-ui/react'


const About = () => {
  return (
    <div>
        <Box   display={['none','none','block','block']} height={['110vh','110vh','90vh','90vh']} style={{

        
width: '100vw',                      

display:'flex',
justifyContent:'center',
flexDirection:'column',
alignItems:'center',

textAlign:'center',
backgroundColor:'#CFEBFD'
                  
}} >

<h2 style={{fontSize:'2rem'}} >
    About Us
    <br/>

    <span style={{color:"#FAB519",fontWeight:'200'}}> About Civil State</span>  
    
    </h2>

<HStack style={{width:'100vw',height:'100%'}}>
 <div style={{marginLeft:'5%'}}>
  <Image src={img9} display={['none','none','block','block']} style={{height:'60vh',width:'40vw'}}></Image>
 </div>

 <Box style={{marginLeft:'6%',height:'100%'}} width={['100%','100%','50%','50%']}>

  

  <Box style={{width:"90%",height:"100%",fontSize:'1rem',marginTop:'3vh',color:'rgba(0,0,0,0.6)'}} textAlign={'start'}>

  Welcome to Civil State. We are a team of educators and tech enthusiasts dedicated to empowering students like you to achieve your academic best. With years of experience in education and technology, we've created a user-friendly, innovative, and efficient platform for your academic journey, ensuring precise and speedy test delivery. Join us, and let's excel together!
  <br/>
  Our commitment extends beyond tests; it's about guiding you towards academic success and personal growth. Discover the transformative learning experience that awaits you at civilsteps.com.

<Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#FAB519" />
  <Text marginLeft={'10px'}>Educational Excellence</Text>
  </Flex>

  </Box>



  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#FAB519" />
  <Text marginLeft={'10px'}>User-Centric Approach</Text>
  </Flex>

  </Box>



  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#FAB519" />
  <Text marginLeft={'10px'}>Continuous Improvement</Text>
  </Flex>

  </Box>



  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#FAB519" />
  <Text marginLeft={'10px'}>Community Support</Text>
  </Flex>

  </Box>

  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#FAB519" />
  <Text marginLeft={'10px'}>Feedback Integration</Text>
  </Flex>

  </Box>


  






 </Box>

 

  


 

  
 </Box>



</HStack>







</Box>





    </div>
  )
}

export default About
