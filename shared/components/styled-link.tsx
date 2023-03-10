import { Link } from 'expo-router';
import { Href } from 'expo-router/src/link/href';
import React from 'react';
import { Button, Pressable, Text } from 'react-native';
import colors from 'tailwindcss/colors';

interface IProps {
  href: Href;
  title: string;
}

const StyledLink: React.FC<IProps> = ({ href, title }) => {
  return (
    <>
      <Link href={href} asChild={true}>
        <Button color={colors.amber[500]} title={title}></Button>
      </Link>
    </>
  );
};

export default StyledLink;
