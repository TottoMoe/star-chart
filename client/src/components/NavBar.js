import React from "react";
import { Container, Menu, Image} from 'semantic-ui-react';


const NavBar = () => {
    return(<div>
        <Menu fixed="top" inverted>
            <Container>
            <Menu.Item as='a' header>
                {/* <Image size='mini' src='' style={{marginRight: '1.5rem'}}/> <<<<needs image>>>> */}
                Star Chart
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Login</Menu.Item>
            </Container>
        </Menu>
    </div>
    )
}



export default NavBar;