import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/openshop/")({
  beforeLoad: () => {
    throw redirect({ to: "/vendorpath", replace: true, statusCode: 301 });
  },
});
