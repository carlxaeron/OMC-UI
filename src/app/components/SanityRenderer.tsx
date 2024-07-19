import React, { useContext } from "react";
import Paper from '@mui/material/Paper';
import { Context } from "../context/provider";
import { PortableText } from "next-sanity";

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

  console.log(props.data);
  return (
    <>
      {props.data && props.data.map(content => content._type == 'block' ? <PortableText value={content} key={content._key} /> : (
        React.createElement(component[getContent(content)], { key: content._key, ...getProps(content) }, '')
      ))}
    </>
  )
}