export default function Head() {
  return (
    <head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        as="style"
        // onLoad="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
      />

      {/* <title>{ctx?.settings?.title || data?.resp?.title?.default || ''}</title> */}
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    </head>
  )
}