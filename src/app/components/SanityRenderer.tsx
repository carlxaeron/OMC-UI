import React, { useContext } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import { Card, CardMedia } from '@mui/material';
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
    <Image {...props} style={{maxWidth: '100%', width: 'auto', height: 'auto'}} />
  )
}

const CardTag = (props: any) => {
  return (
    <Card>
      {/* <AspectRatio ratio={props.metadata.dimensions.aspectRatio}> */}
        <CardMedia
          sx={{ height: props.height }}
          image={props.src}
          title={props.alt}
        />
      {/* </AspectRatio> */}
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default function SanityRenderer(props: { data: any[]; }) {
  const ctx: any = useContext(Context);

  const component: { [key: string]: React.ComponentType<any> } = {
    media: ImgTag,
    card: CardTag,
  }

  const helper = {
    isMedia: (content: any) => content.type == 'mediaItemType' ? true : false,
    isCard: (content: any) => content.type == 'cardType' ? true : false,
    isImage: (content: any) => content._type == 'image' ? true : false,
  }

  const getContent = (content: any) => {
    if (helper.isMedia(content)) return 'media';
    else if (helper.isImage(content)) return 'media';
    else if (helper.isCard(content)) return 'card';
    else return content._type;
  }

  const getProps = (content: any) => {
    let props: any = {};
    if (helper.isMedia(content)) {
      props = { 
        src: content.media.asset.image.url, 
        alt: content.title || '',
        width: content.media.asset.image.metadata.dimensions.width,
        height: content.media.asset.image.metadata.dimensions.height,
      };
    } else if (helper.isCard(content)) {
      props = {
        src: content.image.url,
        alt: content.description || '',
        height: content.image.metadata.dimensions.height,
        metadata: content.image.metadata,
      }
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