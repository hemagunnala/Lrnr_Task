import React, { useState } from 'react';
import Editor from '@draft-js-plugins/editor';
import { EditorState } from 'draft-js';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import { MdAddCircleOutline } from 'react-icons/md'; // Import the add icon from a library like react-icons

import './editor.module.scss';
import 'draft-js/dist/Draft.css';
import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
import '@draft-js-plugins/side-toolbar/lib/plugin.css';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
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
  const [addItem, setAddItem] = useState(null);

  const addAssignment = () => {
    setAddItem('assignment');
  };

  return (
    <div className="App">
      <Editor
        editorState={editorState}
        onChange={changeState}
        placeholder="Start Writing..."
        plugins={plugins}
      />
      <InlineToolbar />
      <SideToolbar />
      <div >
      <MdAddCircleOutline onClick={addAssignment} />
      </div>

    {addItem === 'assignment' && (
      <div>
        {/* Render your assignment widget form or component here */}
        <button onClick={() => setAddItem(null)}></button>
      </div>
    )}
    </div>
  );
};

export default MyEditor;

// import React, { useEffect, useMemo, useRef, useState } from 'react';
// // import { EditorState } from 'draft-js';
// import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
// import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
// import styles from './editor.module.scss';
// // import 'draft-js/dist/Draft.css';
// // import '@draft-js-plugins/inline-toolbar/lib/plugin.css';

// const text =
//   'In this editor a toolbar shows up once you select part of the text …';

// const SimpleInlineToolbarEditor = () => {
//   const [plugins, InlineToolbar] = useMemo(() => {
//     const inlineToolbarPlugin = createInlineToolbarPlugin();
//     return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];
//   }, []);

//   const [editorState, setEditorState] = useState(() =>
//     createEditorStateWithText('')
//   );

//   useEffect(() => {
//     // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
//     setEditorState(createEditorStateWithText(text));
//   }, []);

//   const editor = useRef(null);

//   const onChange = (value) => {
//     setEditorState(value);
//   };

//   const focus = () => {
//     editor.current?.focus();
//   };

//   return (
//     <div className={styles.editor} onClick={focus}>
//       <Editor
//         editorKey="SimpleInlineToolbarEditor"
//         editorState={editorState}
//         onChange={onChange}
//         plugins={plugins}
//         ref={(element) => {
//           editor.current = element;
//         }}
//       />
//       <InlineToolbar />
//     </div>
//   );
// };

// export default SimpleInlineToolbarEditor;
