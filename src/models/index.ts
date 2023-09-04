export type ListItem = {
  text: string;
  icon: JSX.Element;
};

export type FeatureListItem = {
  title: string;
  subtitle: string;
  listItems: ListItem[];
  videoFileName: string;
};
