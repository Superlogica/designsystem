import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button/Button';
import markdownNotes from '../components/Button/README.md';

storiesOf('Button', module)
  .add('Buttons', () =>
    <div>
      <Button>  Button Default </Button>
      <Button size="small">  Button Small </Button>
      <Button size="large">  Button Large </Button>
      <Button size="xlarge">  Button Extra Large </Button>
      <Button fullWidth>  Button Full Width </Button>
      <Button disable>  Button Disabled </Button>
      <Button color="purple">  Purple  </Button>
      <Button color="purple300">  Purple 300 </Button>
      <Button color="purple600">  Purple 600 </Button>
      <Button color="purple900">  Purple 900 </Button>
    </div>
    , {
      notes: { markdown: markdownNotes }
    });