import blog, { redirects } from "https://deno.land/x/blog@0.7.0/blog.tsx";

blog({
  title: "Yujong Lee",
  author: "Yujong Lee",
  links: [
    { title: "Email", url: "mailto:yujonglee.dev@gmail.com" },
    { title: "GitHub", url: "https://github.com/yujonglee" },
  ],
  background: "#000000",
  middlewares: [
    redirects({}),
  ],
});
