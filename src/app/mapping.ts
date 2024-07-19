export const mapping = {
    "HOME":
    `*[_type == "pageType" && title == "Home"]{
      contents[]->{
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
          }
        },
      }
    }`,
    "MENU":
    `*[_type == 'menuType'] | order(order) {
        title,
        "link": Page->slug.current,
        _id,
    }`,
};