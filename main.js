import blog, { redirects } from "https://deno.land/x/blog@0.7.0/blog.tsx";

import "https://esm.sh/prismjs@1.29.0/components/prism-diff";

blog({
  title: "Yujong Lee",
  author: "Yujong Lee",
  links: [
    { title: "Email", url: "mailto:yujonglee.dev@gmail.com" },
    { title: "GitHub", url: "https://github.com/yujonglee" },
  ],
  background: "#000000",
  middlewares: [redirects({})],
});
