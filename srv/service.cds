using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { GenAIHubAH as my } from '../db/schema.cds';

@path : '/service/genAIHubAH'
service genAIHubAHSrv
{
    @odata.draft.enabled
    entity CustomerMessages as
        projection on my.CustomerMessages;

    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };
}

annotate genAIHubAHSrv with @requires :
[
    'authenticated-user'
];
