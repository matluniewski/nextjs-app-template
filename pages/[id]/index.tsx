import { GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import { InferGetStaticPathsType } from '../../types/InferGetStaticPathsType';

const TypescriptExample = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>TypescriptExample</div>;
};

export const getStaticProps = async (
  ctx: InferGetStaticPathsType<typeof getStaticPaths>
): Promise<GetStaticPropsResult<{ product: any }>> => {
  const productId = ctx.params?.id;

  return {
    props: {
      product: { id: productId },
    },
  };
  // satisfies GetStaticPropsResult<unknown> // typescript 4.9
};

export const getStaticPaths = async () => {
  const products = [{ id: 1 }, { id: 2 }];

  return {
    fallback: 'blocking',
    paths: products.map((p) => ({ params: { id: String(p.id) } })),
  };
  //   satisfies GetStaticPathsResult
};

export default TypescriptExample;
