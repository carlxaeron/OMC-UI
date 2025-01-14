import parse from 'style-to-object';

export function convertStyleToObject(style: string): Record<string, string> {
  // const styleArray = style.split(';').filter(Boolean);
  // const styleObject: Record<string, string> = {};

  // styleArray.forEach((styleItem) => {
  //   const [property, value] = styleItem.split(':').map((item) => item.trim());
  //   styleObject[property] = value;
  // });

  // return styleObject;
  
  return parse(style) as Record<string, string>;
}