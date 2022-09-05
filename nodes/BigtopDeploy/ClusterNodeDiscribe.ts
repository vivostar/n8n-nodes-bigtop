import { INodeProperties } from 'n8n-workflow';[]
export const clusterNOdeDiscribe: INodeProperties[] = [
    {
        displayName: 'hostname',
        name: 'hostname',
        type: 'string',
        default: '',
        description: 'deploy host name',
    },
    {
        displayName: 'roles',
        name: 'roles',
        type: 'string',
        typeOptions: {
            rows: 4,
        },
        default: '',
        description: 'hadoop cluster components roles',
        displayOptions: {
            show: {
                rolesenabled: [true],
            },
        },
    },
    {
        displayName: 'components',
        name: 'components',
        type: 'string',
        typeOptions: {
            rows: 4,
        },
        default: '',
        description: 'hadoop cluster components',
        displayOptions: {
            show: {
                rolesenabled: [false],
            },
        },
    },
    {
        displayName: 'configs',
        name: 'configs',
        placeholder: 'configs',
        type: 'fixedCollection',
        default: '',
        typeOptions: {
            multipleValues: true,
        },
        description: '',
        options: [
            {
                name: 'config',
                displayName: 'config',
                values: [
                    {
                        displayName: 'Name',
                        name: 'name',
                        type: 'string',
                        default: 'bigtop deploy config name',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                        description: 'bigtop deploy config value',
                    },
                ],
            },
        ],
    },
]