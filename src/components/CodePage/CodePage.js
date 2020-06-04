import React from 'react';
import {useSetTitle} from '../../services/titleservice';
import './CodePage.scss';

const CodePage = props => {
	useSetTitle('Code');
	return (
	<div className="codePage">
		CodePage
	</div>
)}

export default CodePage;
