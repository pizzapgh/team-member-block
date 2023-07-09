import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { columns, header } = attributes;
	return (
		<div {...useBlockProps.save({ className: `mrl-3up-header-container` })}>
			<div {...useBlockProps.save({ className: `wrap` })}>
				<RichText.Content tagName="h2" value={header} />
			</div>
			<div {...useBlockProps.save({ className: `has-${columns}-columns wrap` })}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
