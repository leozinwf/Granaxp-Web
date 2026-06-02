declare module 'react-quill-new' {
  import * as React from 'react';

  export interface ReactQuillProps {
    theme?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (content: string, delta: any, source: any, editor: any) => void;
    onChangeSelection?: (selection: any, source: any, editor: any) => void;
    modules?: any;
    formats?: string[];
    bounds?: string | HTMLElement;
    children?: React.ReactElement<any>;
    className?: string;
    preserveWhitespace?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    tabIndex?: number;
  }

  const ReactQuill: React.ComponentType<ReactQuillProps>;
  export default ReactQuill;
}