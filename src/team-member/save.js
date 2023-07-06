import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { name, listItems, blocksCount } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <RichText.Content tagName="h4" value={name} />
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {blocksCount > 4 && <p>Maximum number of blocks exceeded.</p>}
        </div>
    );
}
