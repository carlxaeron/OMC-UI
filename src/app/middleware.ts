export default function middleware(req:any) {
  const { pathname } = req.nextUrl
 
  // GET /_next/data/build-id/hello.json
 
  console.log(pathname)
  // with the flag this now /_next/data/build-id/hello.json
  // without the flag this would be normalized to /hello
}