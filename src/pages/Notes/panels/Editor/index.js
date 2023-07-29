import React, { useState } from 'react';
import Editor from '@draft-js-plugins/editor';
import { EditorState } from 'draft-js';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';

import 'draft-js/dist/Draft.css';
import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
import '@draft-js-plugins/side-toolbar/lib/plugin.css';

const sideToolbarPlugin = createSideToolbarPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const changeState = (state) => {
    setEditorState(state);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={changeState}
        placeholder="Start Writing..."
        plugins={plugins}
      />
      <InlineToolbar />
      <SideToolbar />
    </div>
  );
};

export default MyEditor;
