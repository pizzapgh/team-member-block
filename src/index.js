import { registerBlockType } from '@wordpress/blocks';
import './team-member';
import './style.scss';
import Edit from './edit';
import save from './save';


registerBlockType('blocks-course/team-members', {
	attributes: {
		header: {
			type: "string",
			source: "html",
			selector: "h2"
		},
		"columns": {
			"type": "number",
			"default": "2"
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
	save,
});