/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import {IWorkbenchContribution} from 'vs/workbench/common/contributions';
import {AbstractGettingStarted} from 'vs/workbench/parts/gettingStarted/common/abstractGettingStarted';

import { shell } from 'electron';

export class ElectronGettingStarted extends AbstractGettingStarted implements IWorkbenchContribution {

	protected openExternal(url: string) {
		shell.openExternal(url);
	}
}