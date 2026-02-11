import type { LoaderFunction } from "react-router";

export async function lazyLoad(
  pagePath: string,
  loaderPath?: string,
): Promise<{
  Component: React.ComponentType;
  loader?: LoaderFunction;
}> {
  if (loaderPath) {
    const [{ default: Component }, loaderModule] = await Promise.all([
      import(pagePath),
      import(loaderPath),
    ]);
    const loader = Object.values(loaderModule)[0] as LoaderFunction;
    return { Component, loader };
  } else {
    const { default: Component } = await import(pagePath);
    return { Component };
  }
}
