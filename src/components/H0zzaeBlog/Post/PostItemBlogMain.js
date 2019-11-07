import React from 'react'
import { Item } from 'semantic-ui-react'

const ItemExampleHeaders = () => (
    <Item.Group style={{float:'left', margin:'1em', marginTop:'3em'}}>
        <Item>
            <Item.Image size='tiny' src='https://t1.daumcdn.net/cfile/tistory/24457C4F58663DD011' />
            <Item.Content verticalAlign='middle'>
                <Item.Header as='a'>12 Years a Slave</Item.Header>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='tiny' src='https://alduncanson.gallerycdn.vsassets.io/extensions/alduncanson/react-hooks-snippets/1.1.6/1564630918767/Microsoft.VisualStudio.Services.Icons.Default' />
            <Item.Content verticalAlign='middle'>
                <Item.Header as='a' content='My Neighbor Totoro' />
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='tiny' src='https://alduncanson.gallerycdn.vsassets.io/extensions/alduncanson/react-hooks-snippets/1.1.6/1564630918767/Microsoft.VisualStudio.Services.Icons.Default' />
            <Item.Content header='Watchmen' verticalAlign='middle' />
        </Item>
    </Item.Group>
)

export default ItemExampleHeaders
