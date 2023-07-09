import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

const Edit = (props) => {
	const { attributes, setAttributes } = props;
	const { align } = attributes;

	// Update the align attribute to "full" if it's not already set
	if (!align || align !== 'full') {
		setAttributes({ align: 'full' });
	}

	const { columns, header } = attributes;

	const onChangeColumns = (newColumns) => {
		setAttributes({ columns: newColumns });
	};

	const onChangeHeader = (newHeader) => {
		setAttributes({ header: newHeader });
	};

	return (
		<div
			{...useBlockProps({
				className: `mrl-3up-header-container`,
			})}
		>
			{/* Add a div container with the desired class name */}
			<div
				{...useBlockProps({
					className: `wrap`,
				})}
			>
				<RichText
					placeholder={__('Heading', 'team-member')}
					tagName="h2"
					onChange={onChangeHeader}
					value={header}
					allowedFormats={[]}
				/>
			</div>
			<div
				{...useBlockProps({
					className: `has-${columns}-columns wrap`,
				})}
			>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={__('Columns', 'team-members')}
							min={1}
							max={6}
							onChange={onChangeColumns}
							value={columns}
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={['blocks-course/team-member']}
					template={[
						['blocks-course/team-member'],
						['blocks-course/team-member'],
						['blocks-course/team-member'],
					]}
					allowedBlocksCount={4}
				/>
			</div>
		</div>
	);
};

export default Edit;
