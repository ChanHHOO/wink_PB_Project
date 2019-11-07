import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ItemExampleItems = () => (
    <div style={{float:'left', margin:'1em', marginTop:'3em'}}>
        <Item.Group>
            <Item>
                <Item.Image size='small' src='https://t1.daumcdn.net/cfile/tistory/24457C4F58663DD011' />

                <Item.Content>
                    <Item.Header as='a' href = "http://localhost:3000/H0zzae/PE">Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://t1.daumcdn.net/cfile/tistory/24457C4F58663DD011' />

                <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    </div>
)

export default ItemExampleItems