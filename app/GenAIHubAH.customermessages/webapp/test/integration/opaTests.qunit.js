sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'GenAIHubAH/customermessages/test/integration/FirstJourney',
		'GenAIHubAH/customermessages/test/integration/pages/CustomerMessagesList',
		'GenAIHubAH/customermessages/test/integration/pages/CustomerMessagesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessagesList, CustomerMessagesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('GenAIHubAH/customermessages') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessagesList: CustomerMessagesList,
					onTheCustomerMessagesObjectPage: CustomerMessagesObjectPage
                }
            },
            opaJourney.run
        );
    }
);