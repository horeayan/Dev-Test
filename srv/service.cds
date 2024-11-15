using { GenAIHubAH as my } from '../db/schema.cds';

@path: '/service/genAIHubAH'
@requires: 'authenticated-user'
service genAIHubAHSrv {
  @odata.draft.enabled
  entity CustomerMessages as projection on my.CustomerMessages;
}