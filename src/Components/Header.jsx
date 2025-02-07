import React, { useContext, useState, useEffect } from "react";
import {
 Avatar,
 Box,
 Popover,
 PopoverBody,
 PopoverContent,
 PopoverHeader,
 PopoverTrigger,
 Tooltip,
 VStack,
 WrapItem,
 Text,
 HStack,
 Flex,
 Divider,
 Link,
 Menu,
 MenuList,
 MenuItem,
 MenuButton,
 IconButton,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { AuthContext } from "./Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import "./Home.css";

const Header = () => {
 const navigate = useNavigate();
 const { isAuth, setIsAuth, toggleAuth } = useContext(AuthContext);
 const [user, setUser] = useState(null);
 const [isAuthFromLS, setIsAuthFromLS] = useState(false);
 const [admin, setAdmin] = useState(false);
 const [isAdmin, setIsAdmin] = useState(localStorage.getItem("admin") || "");
 const { isOpen, onOpen, onClose } = useDisclosure();
 const toast = useToast();

 const isAuthLS = JSON.parse(localStorage.getItem("isAuth")) || false;
 const userInLS = localStorage.getItem("user") || null;
 const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;

 const handleLogout = () => {
  localStorage.clear();
  window.location.reload();
 };

 useEffect(() => {
  if (userInLS) {
   setUser(userInLS);
   setIsAuthFromLS(isAuthLS);
   setAdmin(userDetails?.isAdmin === "true"); // Ensure isAdmin is boolean
  }
 }, [isAuthLS, userInLS, userDetails]);

 const [isSticky, setIsSticky] = useState(false);
 const [isHidden, setIsHidden] = useState(false);
 const [lastScrollY, setLastScrollY] = useState(0);

 const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
   setIsHidden(true);
  } else {
   setIsHidden(false);
  }

  if (currentScrollY > 100) {
   setIsSticky(true);
  } else {
   setIsSticky(false);
  }

  setLastScrollY(currentScrollY);
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [lastScrollY]);

 // console.log("isAuth:", isAuth);
 // console.log("user:", user);
 // console.log("isAuthFromLS:", isAuthFromLS);
 // console.log("isAdmin:", isAdmin);
 // console.log("isAuthLS:", isAuthLS);
 // console.log("userInLS:", userInLS);
 // console.log("userDetails:", userDetails);

 return (
  <div
   className={`header ${isSticky ? "sticky" : ""} ${isHidden ? "hidden" : ""}`}
  >
   <Box
    w={"100%"}
    height={"6vh"}
    backgroundColor={"#222222"}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
   >
    <HStack width={"100%"}>
     <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      marginLeft={["none", "10vw"]}
     >
      <Text
       mr={"30"}
       color={"#FFFFFF"}
       fontSize={"1rem"}
       display={["none", "none", "block", "block"]}
      >
       Contact us :
      </Text>

      <Flex alignItems={"center"}>
       <FiPhoneCall
        size={26}
        color="#FAB519"
        style={{ marginRight: "4px", paddingTop: "9px" }}
       />
       <Text mr={30} color={"#FFFFFF"} fontSize={"1rem"}>
        +91-xxxxxxxx
       </Text>
      </Flex>

      <Flex alignItems={"center"}>
       <HiOutlineMail
        size={26}
        color="#FAB519"
        style={{ marginRight: "4px", paddingTop: "8px" }}
       />
       <Text mr={30} color={"#FFFFFF"} fontSize={"1rem"}>
        info@civisteps.com
       </Text>
      </Flex>
     </Box>

     <Box
      width={"50%"}
      display={["none", "none", "flex", "flex"]}
      justifyContent={"flex-end"}
      alignItems={"center"}
     >
      {!isAuthLS && (
       <Text color={"#FFFFFF"} fontSize={"1rem"} display={["none", "block"]}>
        <Link href="/register">Register</Link>
       </Text>
      )}
      {isAuthLS && (
       <Text
        color={"#FFFFFF"}
        fontSize={"1rem"}
        display={["none", "block"]}
        cursor={"pointer"}
       >
        <Text onClick={handleLogout}>Logout</Text>
       </Text>
      )}

      <Box
       display={["none", "none", "block", "block"]}
       mx={2}
       h="20px"
       w="2px"
       backgroundColor="#FAB519"
      />
      {isAuthLS ? (
       <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
       >
        <Popover
         border={"5px solid red"}
         isOpen={isOpen}
         onOpen={onOpen}
         onClose={onClose}
         hoverOpenDelay={0}
        >
         <PopoverTrigger>
          <WrapItem>
           <Tooltip label="Go to Dashboard" aria-label="Go to Dashboard">
            <Avatar
             onClick={() => navigate("/user-details")}
             position={"relative"}
             cursor={"pointer"}
             size={"sm"}
             src="https://bit.ly/tioluwani-kolawole"
             style={{ outline: "none" }}
            />
           </Tooltip>
          </WrapItem>
         </PopoverTrigger>
         <PopoverContent style={{ outline: "none" }}>
          <PopoverHeader fontWeight="semibold">User Details</PopoverHeader>
          <PopoverBody>
           <p>Name: {userDetails?.Firstname}</p>
           <p>Email: {userDetails?.Email}</p>
           <p>Location: {userDetails?.Location}</p>
           <p>Gender: {userDetails?.Gender}</p>
          </PopoverBody>
         </PopoverContent>
        </Popover>
       </Box>
      ) : (
       <Text
        mr={30}
        color={"#FFFFFF"}
        fontSize={"1rem"}
        display={["none", "block"]}
       >
        <Link href="/login">Login </Link>
       </Text>
      )}
     </Box>
    </HStack>
   </Box>

   <Box
    width={"100%"}
    height={"9vh"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
   >
    <Box
     display={["block", "block", "none", "none"]}
     spacing={8}
     border={"100px solid red"}
    >
     <Menu>
      <MenuButton
       backgroundColor={"#cccc"}
       position={"absolute"}
       top={"10vh"}
       right={"5px"}
       as={IconButton}
       icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
       onClick={isOpen ? onClose : onOpen}
       aria-label={isOpen ? "Close Menu" : "Open Menu"}
      />
      <MenuList zIndex={"999"}>
       <MenuItem marginRight={"2vw"} fontWeight={"600"} as={Link} href="/">
        Home
       </MenuItem>
       <MenuItem href="/about" marginRight={"2vw"} fontWeight={"600"} as={Link}>
        About
       </MenuItem>
       <MenuItem marginRight={"2vw"} fontWeight={"600"} as={Link} href="/test">
        Take Test
       </MenuItem>
       <MenuItem marginRight={"2vw"} fontWeight={"600"} as={Link} href="/">
        Blog
       </MenuItem>
       <MenuItem
        marginRight={"2vw"}
        fontWeight={"600"}
        as={Link}
        href="/contact"
       >
        Contact
       </MenuItem>
       {isAdmin && (
        <MenuItem
         marginRight={"2vw"}
         fontWeight={"600"}
         as={Link}
         href="/admin-dashboard"
        >
         Admin Dashboard
        </MenuItem>
       )}
      </MenuList>
     </Menu>
    </Box>

    <Box fontFamily={"Lato"} p={3} className="desktop-menu">
     <Menu
      w="80%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
     >
      <MenuButton
       marginRight={"2vw"}
       fontWeight={"200"}
       as={Link}
       href="/"
       fontSize={"0.9rem"}
      >
       Home
      </MenuButton>
      <MenuButton
       marginRight={"2vw"}
       fontWeight={"200"}
       as={Link}
       href="/about"
       fontSize={"0.9rem"}
      >
       About
      </MenuButton>
      <MenuButton
       marginRight={"2vw"}
       fontWeight={"200"}
       fontSize={"0.9rem"}
       as={Link}
       href="/category/subject"
      >
       Take Test
      </MenuButton>
      <MenuButton
       marginRight={"2vw"}
       fontWeight={"200"}
       fontSize={"0.9rem"}
       as={Link}
       href="/"
      >
       Blog
      </MenuButton>
      <MenuButton
       marginRight={"2vw"}
       fontWeight={"200"}
       fontSize={"0.9rem"}
       as={Link}
       href="/contact"
      >
       Contact
      </MenuButton>
      {isAdmin && (
       <MenuButton
        marginRight={"2vw"}
        fontWeight={"200"}
        as={Link}
        href="/admin-dashboard"
       >
        Admin
       </MenuButton>
      )}
     </Menu>
    </Box>
   </Box>
  </div>
 );
};

export default Header;

// import React, { useContext, useState, useEffect } from "react";
// import {
//   Avatar,
//   Box,
//   Popover,
//   PopoverBody,
//   PopoverContent,
//   PopoverHeader,
//   PopoverTrigger,
//   Tooltip,
//   VStack,
//   WrapItem,
//   Text,
//   HStack,
//   Flex,
//   Divider,
//   Link,
//   Menu,
//   MenuList,
//   MenuItem,
//   MenuButton,
//   IconButton,
// } from "@chakra-ui/react";
// import { FiPhoneCall } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";
// import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { useDisclosure, useToast } from "@chakra-ui/react";
// import { AuthContext } from "./Context/AuthContextProvider";
// import { useNavigate } from "react-router-dom";
// import "./Header.css";
// import "./Home.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const { isAuth, setIsAuth, toggleAuth } = useContext(AuthContext);
//   const [user, setUser] = useState(null);
//   const [isAuthFromLS, setIsAuthFromLS] = useState(false);
//   const [admin, setAdmin] = useState(false);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const toast = useToast();

//   const isAuthLS = JSON.parse(localStorage.getItem("isAuth")) || false;
//   const userInLS = localStorage.getItem("user") || null;
//   const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   useEffect(() => {
//     if (userInLS) {
//       setUser(userInLS);
//       setIsAuthFromLS(isAuthLS);
//       setAdmin(userDetails?.isAdmin === "true"); // Ensure isAdmin is boolean
//     }
//   }, [isAuthLS, userInLS, userDetails]);

//   const [isSticky, setIsSticky] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//       setIsHidden(true);
//     } else {
//       setIsHidden(false);
//     }

//     if (currentScrollY > 100) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }

//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);
//   console.log("isAuth:", isAuth);
//   console.log("user:", user);
//   console.log("isAuthFromLS:", isAuthFromLS);
//   console.log("admin:", admin);
//   console.log("isAuthLS:", isAuthLS);
//   console.log("userInLS:", userInLS);
//   console.log("userDetails:", userDetails);

//   return (
//     <div
//       className={`header ${isSticky ? "sticky" : ""} ${
//         isHidden ? "hidden" : ""
//       }`}
//     >
//       <Box
//         w={"100%"}
//         height={"6vh"}
//         backgroundColor={"#222222"}
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <HStack width={"100%"} border={"1px solid red"}>
//           <Box
//             display={"flex"}
//             justifyContent={"center"}
//             alignItems={"center"}
//             marginLeft={["none", "10vw"]}
//           >
//             <Text
//               mr={"30"}
//               color={"#FFFFFF"}
//               fontSize={"1rem"}
//               display={["none", "none", "block", "block"]}
//             >
//               Contact us :
//             </Text>

//             <Flex alignItems={"center"}>
//               <FiPhoneCall
//                 size={26}
//                 color="#FAB519"
//                 style={{ marginRight: "4px", paddingTop: "9px" }}
//               />
//               <Text mr={30} color={"#FFFFFF"} fontSize={"1rem"}>
//                 +91-xxxxxxxx
//               </Text>
//             </Flex>

//             <Flex alignItems={"center"}>
//               <HiOutlineMail
//                 size={26}
//                 color="#FAB519"
//                 style={{ marginRight: "4px", paddingTop: "8px" }}
//               />
//               <Text mr={30} color={"#FFFFFF"} fontSize={"1rem"}>
//                 info@civisteps.com
//               </Text>
//             </Flex>
//           </Box>

//           <Box
//             width={"50%"}
//             display={["none", "none", "flex", "flex"]}
//             justifyContent={"flex-end"}
//             alignItems={"center"}
//           >
//             {!isAuthLS && (
//               <Text
//                 color={"#FFFFFF"}
//                 fontSize={"1rem"}
//                 display={["none", "block"]}
//               >
//                 <Link href="/register">Register</Link>
//               </Text>
//             )}
//             {isAuthLS && (
//               <Text
//                 color={"#FFFFFF"}
//                 fontSize={"1rem"}
//                 display={["none", "block"]}
//                 cursor={"pointer"}
//               >
//                 <Text onClick={handleLogout}>Logout</Text>
//               </Text>
//             )}

//             <Box
//               display={["none", "none", "block", "block"]}
//               mx={2}
//               h="20px"
//               w="2px"
//               backgroundColor="#FAB519"
//             />
//             {isAuthLS ? (
//               <Box
//                 display={"flex"}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//                 gap={2}
//               >
//                 <Popover
//                   border={"5px solid red"}
//                   isOpen={isOpen}
//                   onOpen={onOpen}
//                   onClose={onClose}
//                   hoverOpenDelay={0}
//                 >
//                   <PopoverTrigger>
//                     <WrapItem>
//                       <Tooltip
//                         label="Go to Dashboard"
//                         aria-label="Go to Dashboard"
//                       >
//                         <Avatar
//                           onClick={() => navigate("/user-details")}
//                           position={"relative"}
//                           cursor={"pointer"}
//                           size={"sm"}
//                           src="https://bit.ly/tioluwani-kolawole"
//                           style={{ outline: "none" }}
//                         />
//                       </Tooltip>
//                     </WrapItem>
//                   </PopoverTrigger>
//                   <PopoverContent style={{ outline: "none" }}>
//                     <PopoverHeader fontWeight="semibold">
//                       User Details
//                     </PopoverHeader>
//                     <PopoverBody>
//                       <p>Name: {userDetails?.Firstname}</p>
//                       <p>Email: {userDetails?.Email}</p>
//                       <p>Location: {userDetails?.Location}</p>
//                       <p>Gender: {userDetails?.Gender}</p>
//                     </PopoverBody>
//                   </PopoverContent>
//                 </Popover>
//               </Box>
//             ) : (
//               <Text
//                 mr={30}
//                 color={"#FFFFFF"}
//                 fontSize={"1rem"}
//                 display={["none", "block"]}
//               >
//                 <Link href="/login">Login </Link>
//               </Text>
//             )}
//           </Box>
//         </HStack>
//       </Box>

//       <Box
//         width={"100%"}
//         height={"9vh"}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <Box
//           display={["block", "block", "none", "none"]}
//           spacing={8}
//           border={"1px solid red"}
//         >
//           <Menu>
//             <MenuButton
//               backgroundColor={"#cccc"}
//               position={"absolute"}
//               top={"7vh"}
//               right={"5px"}
//               as={IconButton}
//               icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//               onClick={isOpen ? onClose : onOpen}
//               aria-label={isOpen ? "Close Menu" : "Open Menu"}
//             />
//             <MenuList zIndex={"999"}>
//               <MenuItem
//                 marginRight={"2vw"}
//                 fontWeight={"600"}
//                 as={Link}
//                 href="/"
//               >
//                 Home
//               </MenuItem>
//               <MenuItem
//                 href="/about"
//                 marginRight={"2vw"}
//                 fontWeight={"600"}
//                 as={Link}
//               >
//                 About
//               </MenuItem>
//               <MenuItem
//                 marginRight={"2vw"}
//                 fontWeight={"600"}
//                 as={Link}
//                 href="/test"
//               >
//                 Take Test
//               </MenuItem>
//               <MenuItem
//                 marginRight={"2vw"}
//                 fontWeight={"600"}
//                 as={Link}
//                 href="/"
//               >
//                 Blog
//               </MenuItem>
//               <MenuItem
//                 marginRight={"2vw"}
//                 fontWeight={"600"}
//                 as={Link}
//                 href="/contact"
//               >
//                 Contact
//               </MenuItem>
//               {admin && (
//                 <MenuItem
//                   marginRight={"2vw"}
//                   fontWeight={"600"}
//                   as={Link}
//                   href="/admin-dashboard"
//                 >
//                   Admin Dashboard
//                 </MenuItem>
//               )}
//             </MenuList>
//           </Menu>
//         </Box>

//         <Box fontFamily={"Lato"} p={3}>
//           <Menu
//             w="80%"
//             display={"flex"}
//             alignItems={"center"}
//             justifyContent={"space-between"}
//           >
//             <MenuButton
//               marginRight={"2vw"}
//               fontWeight={"200"}
//               as={Link}
//               href="/"
//               fontSize={"0.9rem"}
//             >
//               Home
//             </MenuButton>
//             <MenuButton
//               marginRight={"2vw"}
//               fontWeight={"200"}
//               as={Link}
//               href="/about"
//               fontSize={"0.9rem"}
//             >
//               About
//             </MenuButton>
//             <MenuButton
//               marginRight={"2vw"}
//               fontWeight={"200"}
//               fontSize={"0.9rem"}
//               as={Link}
//               href="/category/subject"
//             >
//               Take Test
//             </MenuButton>
//             <MenuButton
//               marginRight={"2vw"}
//               fontWeight={"200"}
//               fontSize={"0.9rem"}
//               as={Link}
//               href="/"
//             >
//               Blog
//             </MenuButton>
//             <MenuButton
//               marginRight={"2vw"}
//               fontWeight={"200"}
//               fontSize={"0.9rem"}
//               as={Link}
//               href="/contact"
//             >
//               Contact
//             </MenuButton>
//             <MenuButton
//               marginRight={"2vw"}
//               fontWeight={"200"}
//               as={Link}
//               href="/admin-dashboard"
//             >
//               Admin
//             </MenuButton>
//           </Menu>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Header;
