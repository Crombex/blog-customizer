import { Article } from 'src/components/article/Article';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';

import styles from './App.module.scss';
import { useState, CSSProperties } from 'react';

export const App = () => {
	const [articleOptions, setArticleOptions] =
		useState<ArticleStateType>(defaultArticleState);
	const [submittedArticleOptions, setSubmittedArticleOptions] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={styles.main}
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
