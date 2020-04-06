import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { IconData } from 'src/brandkit/IconsPage'
import Icons from '../../../pages/experience/brand/icons'

const ICONS: IconData[] = [
  {
    name: 'Tree',
    description: 'Organic Technology',
    preview: 'icon.png',
    uri: 'example.com/tree-icon.png',
  },
  {
    name: 'Forest',
    description: 'Ecological Technology',
    preview: 'icon.png',
    uri: 'example.com/forest-icon.png',
  },
]

describe('Experience/Icons', () => {
  it('renders', () => {
    const tree = renderer.create(<Icons icons={ICONS} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
