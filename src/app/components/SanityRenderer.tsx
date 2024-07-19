import React, { useContext } from "react";
import Paper from '@mui/material/Paper';
import { Context } from "../context/provider";
import { PortableText } from "next-sanity";
import { Image } from "next-sanity/image";

const ImgTag = (props: any) => {
  return (
    // <Paper>
    //   {/* eslint-disable-next-line @next/next/no-img-element */}
    //   <img src={props.src} alt={props.alt} />
    // </Paper>
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} />
  )
}

export default function SanityRenderer(props: { data: any[]; }) {
  const ctx: any = useContext(Context);

  const component: { [key: string]: React.ComponentType<any> } = {
    media: ImgTag,
  }

  const helper = {
    isMedia: (content: any) => content.media ? true : false,
    isImage: (content: any) => content._type == 'image' ? true : false,
  }

  const getContent = (content: any) => {
    if (helper.isMedia(content)) return 'media';
    else if (helper.isImage(content)) return 'media';
    else return content._type;
  }

  const getProps = (content: any) => {
    let props = {};
    if (helper.isMedia(content)) {
      props = { 
        src: content.media.asset.image.url, 
        alt: content.title || '',
        width: content.media.asset.image.metadata.dimensions.width,
        height: content.media.asset.image.metadata.dimensions.height,
      };
    } else if (helper.isImage(content)) {
      props = { 
        src: content.asset.url, 
        alt: content.title || '',
        width: content.asset.metadata.dimensions.width,
        height: content.asset.metadata.dimensions.height,
      };
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
        React.createElement(component[getContent(content)], { key: content._key, ...getProps(content) })
      ))}
    </>
  )
}