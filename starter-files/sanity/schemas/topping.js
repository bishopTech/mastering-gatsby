// Everything in sanity studio is a react component
import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // name is the computer name (should be singular)
  name: 'topping',
  // title is the visable title
  title: 'Toppings',
  type: 'document',
  // icon will take any react component.
  // icon: () => `xxx`
  // icon: icon
  icon,
  fields: [
    {
      name: 'name',
      title: 'Toppings Name',
      type: 'string',
      description: 'Name of Toppings',
    },
    {
      name: 'vegetarian',
      title: 'vegetarian',
      type: 'boolean',
      description: 'Is the pizza vegetarian',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.vegetarian ? '- vegetarian' : ''}`,
    }),
  },
};
