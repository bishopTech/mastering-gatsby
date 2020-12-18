// Everything in sanity studio is a react component
import { MdPerson as icon } from 'react-icons/md';

export default {
  // name is the computer name
  name: 'person',
  // title is the visable title
  title: 'Slicemasters',
  type: 'document',
  // icon will take any react component.
  // icon: () => `xxx`
  // icon: icon
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of Person',
    },
    {
      name: 'description',
      title: 'description',
      type: 'text',
      description: 'tell us about yourself',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
