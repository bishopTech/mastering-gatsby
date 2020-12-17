// Everything in sanity studio is a react component
import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // name is the computer name
  name: 'pizza',
  // title is the visable title
  title: 'Pizzas',
  type: 'document',
  // icon will take any react component.
  // icon: () => `xxx`
  // icon: icon
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of Pizzas',
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
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of Pizza in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      // TODO: add custom component
    },
  ],
};
