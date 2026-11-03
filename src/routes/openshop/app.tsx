import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/openshop/app")({
  beforeLoad: ({ location }) => {
    throw redirect({ href: `/vendorpath/app${location.searchStr ? `?${location.searchStr}` : ""}`, replace: true, statusCode: 301 });
  },
});
