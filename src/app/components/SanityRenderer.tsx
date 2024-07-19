import React, { useContext } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Context } from "../context/provider";

const PTag = (props: any) => {
  return (
    <p>{props.children}</p>
  )
}

const ImgTag = (props: any) => {
  return (
    <Paper>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={props.src} alt={props.alt} />
    </Paper>
  )
}

export default function SanityRenderer(props: { data: any[]; }) {
  const ctx: any = useContext(Context);

  const component: { [key: string]: React.ComponentType<any> } = {
    h1: Typography,
    h2: Typography,
    h3: Typography,
    h4: Typography,
    h5: Typography,
    h6: Typography,
    normal: PTag,
    media: ImgTag,
  }

  const helper = {
    isMedia: (content: any) => content.media ? true : false,
  }

  const getContent = (content: any) => {
    if (content.style) return content.style;
    else if (helper.isMedia(content)) return 'media';
    else return content._type;
  }

  const getProps = (content: any) => {
    let props = {};
    if (content.style) {
      props = { variant: content.style }
    }
    else if (helper.isMedia(content)) {
      props = { src: content.media.asset.image.url, alt: content.media.description || '' }
    }

    if (ctx.hideProj) {
      const style = { opacity: 0.1 }
      props.sx = style;
      props.style = style;
    }

    return props;
  }

  const getText = (content: any) => {
    if ((content?.children && content?.children.length > 0 && content?.children[0]?.text) || '') {
      return (content?.children && content?.children.length > 0 && content?.children[0]?.text) || '';
    }
    else return '';
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