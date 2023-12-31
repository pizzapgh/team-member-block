import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';


registerBlockType('blocks-course/team-member', {
    title: __("Team Member", "team-members"),
    description: __("A team member item", "team-members"),
    icon: 'admin-users',
    parent: ["blocks-course/team-members"],
    supports: {
        reusable: false,
        html: false
    },
    attributes: {
        name: {
            type: "string",
            source: "html",
            selector: "h4"
        },
        listItems: {
            type: "array",
            default: [],
        },
        "backgroundColor": {
            "type": "string",
            "default": "slime"
        },
        "textColor": {
            "type": "string",
            "default": "void"
        }
    },
    edit: Edit,
    save: Save
});

