import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from '../services/hooks';
import { setBody } from '../store';

const modules = {
  toolbar: {
    container: '#toolbar',
  },
};

const formats = [
  'bold',
  'italic',
  'underline',
  'blockquote',
  'list',
  'link',
  'code-block',
];

const EditorToolbar = () => (
  <div id='toolbar'>
    <span className='ql-formats'>
      <button type='button' className='ql-bold' />
      <button type='button' className='ql-italic' />
      <button type='button' className='ql-underline' />
    </span>
    <span className='ql-formats'>
      <button type='button' className='ql-list' value='ordered' />
      <button type='button' className='ql-list' value='bullet' />
    </span>
    <span className='ql-formats'>
      <button type='button' className='ql-blockquote' />
      <button type='button' className='ql-link' />
      <button type='button' className='ql-code-block' />
    </span>
  </div>
);

const Editor = () => {
  const dispatch = useDispatch();
  const { body } = useSelector((state) => state.forms.article) ?? {};
  const initialArticle = useSelector((state) => state.view.article);
  const handleChange = (value: string) => {
    dispatch(setBody(value));
  };

  return (
    <div className='text-editor'>
      <EditorToolbar />
      <ReactQuill
        theme='snow'
        value={body === '' ? '' : body || initialArticle?.body || ''}
        onChange={handleChange}
        placeholder='Write something awesome...'
        preserveWhitespace
        modules={modules}
        formats={formats} />
    </div>
  );
};

export default Editor;
