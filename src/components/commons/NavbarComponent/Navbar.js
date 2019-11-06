import React, { useState } from 'react'
import { Menu,Segment } from 'semantic-ui-react'


export default function MenuExampleInvertedSecondary(){

    const [stateName, setState] = useState('MyBlog');
    const [checkHover, setCheckHover] = useState('active item');

    return (
        <div>
            <Segment className="ui inverted segment">
                    <Menu className="ui inverted pointing secondary menu">
                        <Menu.Item className="item" stateName = 'Main' onClick="setState('Main');">Main</Menu.Item>
                        <Menu.Item className="active item" stateName = 'MyBlog' onClick={() => setState('MyBlog')}>MyBlog</Menu.Item>
                        <Menu.Item className="item" stateName = 'Contact'onClick={() => setState('Contact')}>Contact</Menu.Item>
                    </Menu>
            </Segment>
        </div>
    )

}
