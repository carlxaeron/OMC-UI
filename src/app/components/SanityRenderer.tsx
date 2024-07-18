import React from "react";
import Typography from '@mui/material/Typography';

export default function SanityRenderer(props: { data: any[]; }) {

  const component: { [key: string]: React.ComponentType<any> } = {
    // pageType: PageType,
    // mediaItemType: MediaItemType
    h1: Typography,
  }

  const getContent = (content: any) => {
    if(content.style) {
      return 'h1' || content.style;
    }
    else return 'h1' || content._type;
  }

  const getProps = (content: any) => {
    let sel = false;
    let props = {};
    if(content.style) {
      props = { variant: 'h1' }
    }
    else {
      props = { variant: 'h1' }
    }
    return {
      ...props,
    }; // Return an empty object or add properties to the object based on your requirements
  }

  const getText = (content: any) => {
    if((content?.children && content?.children.length > 0 && content?.children[0]?.text) || '') {
      return (content?.children && content?.children.length > 0 && content?.children[0]?.text) || 'Ewan';
    }
    else return 'content.text';
  }

  console.log(props.data);
  return (
      <>
        {props.data && props.data.map(content => (
          React.createElement(component[getContent(content)], { key: content._key, ...getProps(content) }, getText(content))
        ))}
      </>
    )
}