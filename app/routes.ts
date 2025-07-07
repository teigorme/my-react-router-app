import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  // cria um prefix padrão pra as rotas do array
  ...prefix("countries", [
    index("routes/countries.tsx"),
    route(":coutryName", "routes/country.tsx"),
  ]),
] satisfies RouteConfig;
