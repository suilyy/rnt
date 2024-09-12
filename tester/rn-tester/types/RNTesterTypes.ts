import * as React from 'react';

export type RNTesterModuleExample = {
  name?: string;
  title: string;
  platform?: 'ios' | 'android';
  description?: string;
  expect?: string;
  render: () => React.ReactNode;
};

export type RNTesterModule = {
  title: string;
  testTitle?: string;
  description: string;
  displayName?: string;
  documentationURL?: string;
  category?: string;
  framework?: string;
  examples: Array<RNTesterModuleExample>;
  showIndividualExamples?: boolean;
};

export type RNTesterModuleInfo = {
  key: string;
  module: RNTesterModule;
  category?: string;
  documentationURL?: string;
  isBookmarked?: boolean;
  exampleType?: 'components' | 'apis';
};

export type SectionData<T> = {
  key: string;
  title: string;
  data: Array<T>;
};

export type CommonSectionType = Array<SectionData<RNTesterModuleInfo>>;

export type ExamplesList = {
  components: Array<SectionData<RNTesterModuleInfo>>;
  apis: Array<SectionData<RNTesterModuleInfo>>;
  bookmarks: Array<SectionData<RNTesterModuleInfo>>;
};

export type ScreenTypes = 'components' | 'apis' | 'bookmarks' | null;

export type ComponentList = null | { components: string[]; apis: string[] };

export type RNTesterNavigationState = {
  activeModuleKey: null | string;
  activeModuleTitle: null | string;
  activeModuleExampleKey: null | string;
  screen: ScreenTypes;
  bookmarks: ComponentList;
  recentlyUsed: ComponentList;
};

export type RNTesterJsStallsState = {
  stallIntervalId: NodeJS.Timer;
  busyTime: null | number;
  filteredStall: number;
  tracking: boolean;
};
