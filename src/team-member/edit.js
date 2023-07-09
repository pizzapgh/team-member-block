import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
    const { name, bio, listItems } = attributes;
    const onChangeName = (newName) => {
        setAttributes({ name: newName })
    }
    const onChangeListItem = (index, value) => {
        const updatedListItems = [...listItems];
        updatedListItems[index] = value;
        setAttributes({ listItems: updatedListItems });
    };

    const addListItem = () => {
        const updatedListItems = [...listItems, ""];
        setAttributes({ listItems: updatedListItems });
    };

    const removeListItem = (index) => {
        const updatedListItems = [...listItems];
        updatedListItems.splice(index, 1);
        setAttributes({ listItems: updatedListItems });
    };

    return (
        <div {...useBlockProps()}>
            <RichText
                placeholder={__("Heading", "team-member")}
                tagName="h4"
                onChange={onChangeName}
                value={name}
                allowedFormats={[]}
            />
            {listItems &&
                listItems.map((item, index) => (
                    <div key={index}>
                        <RichText
                            placeholder={__("List Item Text", "team-member")}
                            tagName="li"
                            onChange={(value) => onChangeListItem(index, value)}
                            value={item}
                            allowedFormats={["core/paragraph"]}
                        />
                        {index > 0 && (
                            <button onClick={() => removeListItem(index)}>Remove</button>
                        )}
                    </div>
                ))}
            <button onClick={addListItem}>Add Item</button>
        </div>
    );
}