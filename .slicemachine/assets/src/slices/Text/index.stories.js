import * as React from 'react';
import { createRuntime } from 'gatsby-source-prismic';

import MyComponent from '../../../../../src/slices/Text';
import model from '../../../../../src/slices/Text/model.json';

export default {
  title: 'src/slices/Text'
}

const runtime = createRuntime();
runtime.registerSharedSliceModel(model);


export const _DefaultSlice = () =>
  <MyComponent
    slice={runtime.normalize(
      {"variation":"default-slice","name":"Default slice","slice_type":"text","items":[],"primary":{"text":[{"type":"paragraph","text":"Sint labore voluptate excepteur magna consectetur consequat ullamco. Consectetur aliqua enim aute nisi.","spans":[]}]},"id":"_DefaultSlice"},
      ['text', 'default-slice']
    )}
  />
_DefaultSlice.storyName = 'Default slice'

