import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gmail Summary Service" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>hi</div>;
}
