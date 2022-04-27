import React, {
  useEffect,
  useMemo,
  useState,
  ChangeEvent,
  KeyboardEvent,
  SyntheticEvent,
  FC,
} from 'react';
import { connect } from 'react-redux';
import ListErrors from '../../components/ListErrors';
import agent from '../../agent';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
} from '../../constants/actionTypes';

const mapStateToProps = (state: any) => ({
  ...state.editor,
});

const mapDispatchToProps = (dispatch: any) => ({
  onAddTag: () => dispatch({ type: ADD_TAG }),
  onLoad: (payload: any) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: (tag: string) => dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: (payload: any) => dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: (payload: any) => dispatch({ type: EDITOR_PAGE_UNLOADED }),
});

interface IEditor {
  title: string | undefined;
  description: string | undefined;
  body: string | undefined;
  tags: string | undefined;
  tagsList: string[] | [];
}

interface IEditorProps {
  articleSlug: string;
  staticContext: string | undefined;
  match: {
    isExact: boolean;
    params: {};
    path: string;
    url: string;
  };
  onAddTag: Function;
  onLoad: Function;
  onRemoveTag: Function;
  onSubmit: Function;
  onUnload: Function;
}

export const Editor: FC<IEditorProps> = (props: any) => {
  const [state, setState] = useState<IEditor>({
    title: undefined,
    description: undefined,
    body: undefined,
    tags: undefined,
    tagsList: [],
  });

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, title: e.target.value });
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, description: e.target.value });
  };

  const onChangeBody = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, body: e.target.value });
  };

  const onChangeTags = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, tags: e.target.value });
  };

  const watchForEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && state.tags) {
      e.preventDefault();
      setState({ ...state, tagsList: [...state.tagsList, state.tags] });
    }
  };

  const removeTagHandler = (tag: string) => () => {
    props.onRemoveTag(tag);
  };

  const submitForm = (e: SyntheticEvent<Element>) => {
    e.preventDefault();
    const article = {
      title: state.title,
      description: state.description,
      body: state.body,
      tagList: state.tagsList,
    };

    const slug = { slug: props.articleSlug };
    const promise = props.articleSlug
      ? agent.Articles.update(Object.assign(article, slug))
      : agent.Articles.create(article);

    props.onSubmit(promise);
  };

  useEffect(() => {
    if (props.match.params.slug) {
      return props.onLoad(agent.Articles.get(props.match.params.slug));
    }
    props.onLoad(null);

    return () => {
      props.onUnload();
    };
  }, [props.match.params.slug]);

  useMemo(() => {
    props.onUnload();
    return props.onLoad(agent.Articles.get(props.match.params.slug));
  }, [props.match.params.slug]);

  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <ListErrors errors={props.errors} />

            <form>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Article Title'
                    value={state.title}
                    onChange={onChangeTitle} />
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder="What's this article about?"
                    value={state.description}
                    onChange={onChangeDescription} />
                </fieldset>

                <fieldset className='form-group'>
                  <textarea
                    className='form-control'
                    rows={8}
                    placeholder='Write your article (in markdown)'
                    value={state.body}
                    onChange={() => onChangeBody} />
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Enter tags'
                    value={state.tags}
                    onChange={onChangeTags}
                    onKeyUp={watchForEnter} />

                  <div className='tag-list'>
                    {(state.tagsList || []).map((tag: string) => (
                      <span className='tag-default tag-pill' key={tag}>
                        <i
                          className='ion-close-round'
                          onClick={removeTagHandler(tag)} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </fieldset>

                <button
                  className='btn btn-lg pull-xs-right btn-primary'
                  type='button'
                  disabled={props.inProgress}
                  onClick={submitForm}>
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
