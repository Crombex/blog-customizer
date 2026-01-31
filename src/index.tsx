import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleOptions, setArticleOptions] =
		useState<ArticleStateType>(defaultArticleState);
	const [submittedArticleOptions, setSubmittedArticleOptions] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': submittedArticleOptions.fontFamilyOption.value,
					'--font-size': submittedArticleOptions.fontSizeOption.value,
					'--font-color': submittedArticleOptions.fontColor.value,
					'--container-width': submittedArticleOptions.contentWidth.value,
					'--bg-color': submittedArticleOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				values={articleOptions}
				onChange={setArticleOptions}
				options={{
					fontFamilyOptions,
					fontSizeOptions,
					fontColors,
					backgroundColors,
					contentWidthArr,
				}}
				onReset={() => {
					setSubmittedArticleOptions(defaultArticleState);
					setArticleOptions(defaultArticleState);
				}}
				onSubmit={() => {
					setSubmittedArticleOptions(articleOptions);
				}}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
