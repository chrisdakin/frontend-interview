import React from 'react';
import { useSearchContext } from "../contexts/search";


const Repository = (props) => {
    const { getRepositoryById } = useSearchContext();
    const id = window.location.href.split('/').slice(-1)?.[0];
    const {
        fullName,
        issuesUrl,
        pullsUrl,
        license
    } = getRepositoryById(id) || {};


    const licenseDisplay = license ?
        <ul>
            {license.name}
            <ul>
                <li>spdx id: {license.spdx_id}</li>
                <li>Link: <a href={license.url}>{license.url}</a></li>
            </ul>
        </ul>
        : null;

    const formattedIssuesUrl = issuesUrl?.replace('{/number}', '');
    const formattedPullsUrl = pullsUrl?.replace('{/number}', '');

    return <div>
        <h1>Repository: {fullName}</h1>
        <ul>
            {issuesUrl && <li><a href={formattedIssuesUrl}>Issues</a></li>}
            {pullsUrl && <li><a href={formattedPullsUrl}>Pull Requests</a></li>}
            {licenseDisplay}
        </ul>

    </div>
}

export default Repository;