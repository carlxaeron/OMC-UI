const contentQuery = `content[]{
          ...,
          _type == 'reference' => {
            ...*[_id == ^._ref && _type == 'mediaItemType'][0]{
              'type':_type,
              description,
              media{
                asset{
                  ...,
                  'image':*[_id == ^._ref][0],
                },
              },
              title,
            },
          },
          ...*[_id == ^._ref && _type == 'cardType'][0]{
            'type':_type,
            title,
            description,
            image{
              ...*[_id == ^._ref][0].media.asset{
                ...*[_id == ^._ref][0],
              },
            }
          },
          _type == 'image' => {
            asset->,
          },
        },`;

const defaultQuery = `{
      contents[]->{
        sectionId,
        title,
        ${contentQuery}
      }
    }`;

export const mapping = {
    // SANITY QUERIES
    HOME:
    `*[_id == "homePage"]${defaultQuery}`,
    MENU:
    `*[_type == 'menuType'] | order(order) {
        icon,
        title,
        "link": Page->slug.current,
        _id,
    }`,
    MENU_MOBILE:
    `*[_type == 'mobileMenuType'] | order(order) {
        icon,
        title,
        "link": Page->slug.current,
        _id,
    }`,
    SETTINGS: 
    `*[_type == 'settingsType']{
      ...,
      'siteLogo': siteLogo.asset{...*[^._ref == _id][0]},
    }`,
    SLUG: (data: any) => `*[_type == 'pageType' && slug.current == '${data.slug}']${defaultQuery}`,
    SECTION: (data: any) => `*[${data.where}]{sectionId, ${contentQuery}}`,
    // BLUEZONE QUERIES
    LOGIN: {url: '/login', method: 'POST'},
};