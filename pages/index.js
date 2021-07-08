/**
 * Test Page
 * @author mtownsend
 * @since July 08, 2021
 * @flow
 **/

import React from 'react';

type Props = {|
  text: string
|};
const Message = ({ text }: Props) => (
  <div>{text}</div>
);

export default () => (
  <Message text="Hello shitty world" />
);