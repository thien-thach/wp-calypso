module.exports = {
	statsDefaultFilter: {
		datestamp: '20150601',
		variations: {
			day: 90,
			insights: 10
		},
		defaultVariation: 'day'
	},
	multiDomainRegistrationV1: {
		datestamp: '20200721',
		variations: {
			singlePurchaseFlow: 10,
			popupCart: 45,
			keepSearchingInGapps: 45
		},
		defaultVariation: 'singlePurchaseFlow'
	},
	translatorInvitation: {
		datestamp: '20150910',
		variations: {
			noNotice: 1,
			startNow: 1,
			helpUs: 1,
			tryItNow: 1,
			startTranslating: 1,
			improve: 1
		},
		defaultVariation: 'noNotice',
		allowAnyLocale: true
	},
	plansPageBusinessAATest: {
		datestamp: '20160108',
		variations: {
			originalA: 50,
			originalB: 50
		},
		defaultVariation: 'originalA'
	},
	businessPluginsNudge: {
		datestamp: '20151119',
		variations: {
			drake: 50,
			nudge: 50
		},
		defaultVariation: 'drake'
	},
	domainsAddButton: {
		datestamp: '20160113',
		variations: {
			original: 50,
			button: 50
		},
		defaultVariation: 'original'
	},
	freeTrials: {
		datestamp: '20160107',
		variations: {
			notOffered: 90,
			offered: 10
		},
		defaultVariation: 'notOffered'
	},
};
