export interface BaseTemplateProps {
  sampleProp: string;
}

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ sampleProp }) => {
  return <div>{sampleProp}</div>;
};
