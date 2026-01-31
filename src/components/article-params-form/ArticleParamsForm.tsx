import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import React, { useState, useRef } from 'react';
import { clsx } from 'clsx';
import { Select } from 'src/ui/select/';
import { RadioGroup } from 'src/ui/radio-group/RadioGroup';
import {
	fontFamilyOptions,
	fontSizeOptions,
	ArticleStateType,
	contentWidthArr,
	backgroundColors,
	fontColors,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	values: ArticleStateType;
	onChange: (newValue: ArticleStateType) => void;
	onReset: () => void;
	onSubmit: () => void;
	options: {
		fontFamilyOptions: typeof fontFamilyOptions;
		fontSizeOptions: typeof fontSizeOptions;
		fontColors: typeof fontColors;
		backgroundColors: typeof backgroundColors;
		contentWidthArr: typeof contentWidthArr;
	};
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isOpen, setOpen] = useState(false);
	const { values, onChange, options, onReset, onSubmit } = props;
	const asideRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef: asideRef,
		onChange: setOpen,
	});

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setOpen((prev) => !prev);
				}}
			/>
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={asideRef}>
				<form className={styles.form}>
					<Select
						title='Шрифт'
						selected={values.fontFamilyOption}
						options={options.fontFamilyOptions}
						onChange={(option) =>
							onChange({ ...values, fontFamilyOption: option })
						}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						selected={values.fontSizeOption}
						options={options.fontSizeOptions}
						onChange={(option) =>
							onChange({ ...values, fontSizeOption: option })
						}
					/>
					<Select
						title='Цвет шрифта'
						selected={values.fontColor}
						options={options.fontColors}
						onChange={(option) => onChange({ ...values, fontColor: option })}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={values.backgroundColor}
						options={options.backgroundColors}
						onChange={(option) =>
							onChange({ ...values, backgroundColor: option })
						}
					/>
					<Select
						title='Ширина контента'
						selected={values.contentWidth}
						options={options.contentWidthArr}
						onChange={(option) => onChange({ ...values, contentWidth: option })}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={onReset}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={onSubmit}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
