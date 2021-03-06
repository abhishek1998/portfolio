import { Box } from "@chakra-ui/react"

import { MAX_WIDTH } from "config"
import Header from "@/components/header"
import Footer from "@/components/footer"

const Layout = ({ children }) => (
  <>
    <Box border="solid 22px #8ecae6">
	    <Header />
	    <Box as="main"  px={[4, 6, 10, 14, 20]} maxW={MAX_WIDTH} mx="auto">
	      {children}
	    </Box>
	    <Footer />
     </Box>
  </>
)

export default Layout
