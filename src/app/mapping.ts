export const mapping = {
    "HOME":
    `*[_id == "homePage"]{
      contents[]->{
        sectionId,
        title,
        content[]{
          ...,
          _type == 'reference' => {
            ...*[_id == ^._ref && _type == 'mediaItemType'][0]{
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
          _type == 'image' => {
            asset->,
          },
        },
      }
    }`,
    "MENU":
    `*[_type == 'menuType'] | order(order) {
        icon,
        title,
        "link": Page->slug.current,
        _id,
    }`,
};