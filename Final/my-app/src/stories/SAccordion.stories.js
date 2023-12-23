import Accordion from '../components/SAccordion.vue';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Accordion },
  props: Object.keys(argTypes),
  template: '<Accordion v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    // Add more items as needed
  ],
};

export const NoItems = Template.bind({});
NoItems.args = {
  items: [],
};

export const OneActiveItem = Template.bind({});
OneActiveItem.args = {
  items: [
    { title: 'Default Expanded Section', content: 'Content for default expanded section' },
  ],
  activeIndex: 0,
};
