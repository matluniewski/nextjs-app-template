import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer Params extends ParsedUrlQuery }>;
}>
  ? GetStaticPropsContext<Params>
  : never;
