import { IExecuteFunctions } from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';
import { clusterNOdeDiscribe } from './ClusterNodeDiscribe';

export class BigtopDeploy implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Bigtop Deploy',
		name: 'bigtopDeploy',
		group: ['transform'],
		version: 1,
		description: 'Bigtop Deploy Node',
		defaults: {
			name: 'Bigtop Deploy ',
		},
		icon: 'file:bigtop-logo.png',
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'stackname',
				name: 'stackname',
				type: 'string',
				default: '',
				description: 'stackname',
			},
			{
				displayName: 'repourl',
				name: 'repourl',
				type: 'string',
				default: 'http://repos.bigtop.apache.org/releases/3.1.0/centos/7/$basearch',
				description: 'bigtop repo url',
			},
			{
				displayName: 'headnode',
				name: 'headnode',
				type: 'string',
				default: 'master',
				description: 'head node domain name',
			},
			
			{
				displayName: 'storagedirs',
				name: 'storagedirs',
				type: 'string',
				default: '',
				placeholder: '/data/1, /data/2',
				description: 'hadoop storage dirs',
			},
			
			//fix collection
			{
				displayName: 'Cluster Nodes',
				name: 'clusterNodes',
				placeholder: 'Add Cluster Node',
				type: 'fixedCollection',
				default: '',
				typeOptions: {
					multipleValues: true,
				},
				description: '',
				options: [
					{
						name: 'clusterNode',
						type: 'credentialsSelect',
						displayName: 'Cluster Node',
						values: clusterNOdeDiscribe,
					},
				],
				
			},
			
			//fix collection

		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		console.log(this.getNodeParameter('stackname', 0));
		console.log(this.getNodeParameter('storagedirs', 0));

		let returnItems = [];
		returnItems = this.helpers.returnJsonArray({
			log: `bigtop deploy`,
		});
		return this.prepareOutputData(returnItems);
	}
}
